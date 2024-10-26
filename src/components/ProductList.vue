<template>
    <section class="product-list">
        <h2 class="text-center text-danger font-weight-bold">
            Các sản phẩm nổi bật
        </h2>
        <div class="pro-list row ">
            <div v-for="(productItem, index) in productList" :key="index" class="col-lg-3">
                <product-item :productItem="productItem" @hanlde-buy="hanldeBuy" />
            </div>
        </div>
    </section>
</template>
<script>
import ProductItem from "./ProductItem.vue";
import sp1 from "../assets/images/iphone-4.jfif";
import sp2 from "../assets/images/iphone-5.jfif";
import sp3 from "../assets/images/iphone-6.jfif";
import sp4 from "../assets/images/iphone-7.jfif";
import sp5 from "../assets/images/iphone-8.jfif";
import sp6 from "../assets/images/iphone-x.jfif";
import sp7 from "../assets/images/iphone-11.jfif";
import sp8 from "../assets/images/iphone-12.jfif";
export default {
    components: {
        ProductItem,
    },
    data() {
        return {
            productList: [
                {
                    id: 1,
                    name: "Iphone 4",
                    image: sp1,
                    description: "iPhone 4, ra mắt vào tháng 6 năm 2010, là một trong những sản phẩm nổi bật của Apple, đánh dấu sự chuyển mình lớn trong thiết kế và công nghệ điện thoại thông minh.",
                    price: 2400000 ,
                    sale: 10,
                    quantityInStock: 10,
                },
                {
                    id: 2,
                    name: "Iphone 5",
                    image: sp2,
                    description: "iPhone 5, ra mắt vào tháng 9 năm 2012, là một bước tiến lớn so với các phiên bản trước, mang đến nhiều cải tiến về thiết kế, hiệu suất và tính năng.",
                    price: 2400000,
                    sale: 5,
                    quantityInStock: 15,
                },
                {
                    id: 3,
                    name: "Iphone 6",
                    image: sp3,
                    description: "iPhone 6, được ra mắt vào tháng 9 năm 2014, là một trong những mẫu điện thoại thành công nhất của Apple, mang đến nhiều cải tiến đáng kể so với các phiên bản trước. ",
                    price: 3600000,
                    sale: 0,
                    quantityInStock: 5,
                },
                {
                    id: 4,
                    name: "Iphone 7",
                    image: sp4,
                    description: "iPhone 7, được Apple ra mắt vào tháng 9 năm 2016, là một trong những mẫu điện thoại mang lại nhiều cải tiến đáng kể so với iPhone 6 và 6S.",
                    price: 6000000 ,
                    sale: 5,
                    quantityInStock: 35,
                },
                {
                    id: 5,
                    name: "Iphone 8",
                    image: sp5,
                    description: "iPhone 8, được ra mắt vào tháng 9 năm 2017, là một trong những mẫu điện thoại kế tiếp của Apple sau iPhone 7.",
                    price: 9600000 ,
                    sale: 5,
                    quantityInStock: 50,
                },
                {
                    id: 6,
                    name: "Iphone x",
                    image: sp6,
                    description: "iPhone X, ra mắt vào tháng 11 năm 2017, là mẫu điện thoại đánh dấu kỷ niệm 10 năm của Apple trong ngành công nghiệp smartphone. ",
                    price: 14400000 ,
                    sale: 0,
                    quantityInStock: 100,
                },
                {
                    id: 7,
                    name: "Iphone 11",
                    image: sp8,
                    description: "iPhone 11, được Apple ra mắt vào tháng 9 năm 2019, là một trong những mẫu smartphone được yêu thích nhất nhờ vào sự kết hợp hoàn hảo giữa hiệu suất, thiết kế và giá cả hợp lý.",
                    price: 16800000 ,
                    sale: 5,
                    quantityInStock: 120,
                },
                {
                    id: 8,
                    name: "Iphone 12",
                    image: sp7,
                    description: "iPhone 12, ra mắt vào tháng 10 năm 2020, là một trong những mẫu smartphone nổi bật của Apple, đánh dấu sự chuyển mình với thiết kế mới và nhiều công nghệ tiên tiến. ",
                    price: 21600000 ,
                    sale: 5,
                    quantityInStock: 65,
                },
            ],
        };
    },
    methods: {
        hanldeBuy(productItem) {
            console.log(productItem);
            this.$emit('hanlde-buy', productItem);
        }
    }
};
</script>
<style></style>