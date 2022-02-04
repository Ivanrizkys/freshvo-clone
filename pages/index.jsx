import { header } from "@/utils/request";
import Layout from "@/components/atoms/Layout";
import Header from "@/components/organism/Header";
import Navigation from "@/components/organism/Navigation";
import Product from "@/components/organism/Product";
import Category from "@/components/organism/Category";
import ContainerXS from "@/components/atoms/Container";
import NewInformation from "@/components/organism/NewInformation";
import VoucherAndPoints from "@/components/organism/VoucherAndPoints";

const Home = ({location, product, category, banners}) => {
    return (
        <Layout>
                <ContainerXS>
                    <Header location={location}/>
                    <VoucherAndPoints />
                    <NewInformation banners={banners}/>
                    <Category category={category} />
                    <Product product={product}/>
                    <Navigation />
                </ContainerXS>
        </Layout>
    );
};

export async function getServerSideProps(ctx) {
    const reqLocation = await fetch("https://api.warung.io/customer/ecommerce/locations?search=&page=1", {
        headers: header
    })
    const resLocation = await reqLocation.json()

    const reqProduct = await fetch("https://api.warung.io/customer/ecommerce/products?isFeatured=true&page=1", {
        headers: header
    })
    const resProduct = await reqProduct.json()

    const reqCategory = await fetch("https://api.warung.io/customer/ecommerce/products/categories?page=1&perPage=100&isParent=true", {
        headers: header
    })
    const resCategory = await reqCategory.json()

    const reqBanners = await fetch("https://api.warung.io/customer/ecommerce/banners", {
        headers: header
    })
    const resBanners = await reqBanners.json()

    return {
        props: {
            location: resLocation.data,
            product: resProduct.data,
            category: resCategory.data,
            banners: resBanners.data
        }
    }
}

export default Home;
