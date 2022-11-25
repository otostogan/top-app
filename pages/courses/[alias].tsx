import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interface';

const firstCategory = 0;


function Course({menu, page, products}: CourseProps): JSX.Element {
	return (
		<>
            {products && products.length}
		</>
	);
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {

    const menuReq = await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
        method: 'POST',
        headers: {
        'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
            firstCategory: 0
        }),
    });

    const menu:MenuItem[] = await menuReq.json();


    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {

    if(!params){
        return {
            notFound: true
        };
    }

    const menuReq = await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
        method: 'POST',
        headers: {
        'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
            firstCategory: 0
        }),
    });

    const menu:MenuItem[] = await menuReq.json();

    const pageReq = await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias, {
        method: 'GET',
        headers: {
        'content-type': 'application/json;charset=UTF-8',
        }
    });

    const page:TopPageModel = await pageReq.json();

    const productsReq = await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find", {
        method: 'POST',
        headers: {
        'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
            category: page.category,
            limit: 10
        }),
    });

    const products:ProductModel[] = await productsReq.json();


	return {
		props: {
			menu,
			firstCategory,
            page,
            products
		}
	};
};

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
    page: TopPageModel;
    products: ProductModel[];
}