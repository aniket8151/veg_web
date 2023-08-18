import React from 'react'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Product_Sidebar from '../../COMPONENTS/Product/Product_Sidebar'
import img1 from '../../ASSETS/Product images/vege/1.png'
import img2 from '../../ASSETS/Product images/vege/2.png'
import img3 from '../../ASSETS/Product images/vege/3.png'
import img4 from '../../ASSETS/Product images/vege/4.png'
import img5 from '../../ASSETS/Product images/vege/5.png'
import img6 from '../../ASSETS/Product images/vege/6.png'

import img21 from '../../ASSETS/Product images/fruits/1.png'
import img22 from '../../ASSETS/Product images/fruits/2.png'
import img23 from '../../ASSETS/Product images/fruits/3.png'
import img24 from '../../ASSETS/Product images/fruits/4.png'
import img25 from '../../ASSETS/Product images/fruits/5.png'
import img26 from '../../ASSETS/Product images/fruits/6.png'

// import img2 from '../../ASSETS/Images/2.png'

import ProductsSlider from '../../COMPONENTS/Product/ProductsSlider'


const Home = () => {

  const products = [
    {
        "ProductId": 1,
        "ProductName": "ONION",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img1
            },
            // {
            //     id: 2,
            //     image: img2
            // },
            // {
            //     id: 3,
            //     image: img3
            // }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 80,
        "ProductDiscount": 20,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 2,
        "ProductName": "CABBAGE",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            // {
            //     id: 1,
            //     image: img2
            // },
            {
                id: 2,
                image: img2
            },
            // {
            //     id: 3,
            //     image: img3
            // }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 90,
        "ProductDiscount": 10,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 3,
        "ProductName": "POTATO",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            // {
            //     id: 1,
            //     image: img3
            // },
            // {
            //     id: 2,
            //     image: img2
            // },
            {
                id: 3,
                image: img3
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 70,
        "ProductDiscount": 30,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 4,
        "ProductName": "CARROT",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 4,
                image: img4
            },
            // {
            //     id: 2,
            //     image: img2
            // },
            // {
            //     id: 3,
            //     image: img3
            // }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 80,
        "ProductDiscount": 20,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 5,
        "ProductName": "LEMON",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 5,
                image: img5
            },
            // {
            //     id: 2,
            //     image: img1
            // },
            // {
            //     id: 3,
            //     image: img3
            // }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 90,
        "ProductDiscount": 10,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 6,
        "ProductName": "SPINACH",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 6,
                image: img6
            },
            // {
            //     id: 2,
            //     image: img2
            // },
            // {
            //     id: 3,
            //     image: img3
            // }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 70,
        "ProductDiscount": 30,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    }
]
const products2 = [
    {
        "ProductId": 1,
        "ProductName": "ORANGE",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img21
            },
            // {
            //     id: 2,
            //     image: img2
            // },
            // {
            //     id: 3,
            //     image: img3
            // }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 80,
        "ProductDiscount": 20,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 2,
        "ProductName": "AVACADO",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            // {
            //     id: 1,
            //     image: img2
            // },
            {
                id: 2,
                image: img22
            },
            // {
            //     id: 3,
            //     image: img3
            // }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 90,
        "ProductDiscount": 10,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 3,
        "ProductName": "APPLE",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            // {
            //     id: 1,
            //     image: img3
            // },
            // {
            //     id: 2,
            //     image: img2
            // },
            {
                id: 3,
                image: img23
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 70,
        "ProductDiscount": 30,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 4,
        "ProductName": "MANGO",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 4,
                image: img24
            },
            // {
            //     id: 2,
            //     image: img2
            // },
            // {
            //     id: 3,
            //     image: img3
            // }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 80,
        "ProductDiscount": 20,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 5,
        "ProductName": "BANANA",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 5,
                image: img25
            },
            // {
            //     id: 2,
            //     image: img1
            // },
            // {
            //     id: 3,
            //     image: img3
            // }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 90,
        "ProductDiscount": 10,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 6,
        "ProductName": "PEAR",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 6,
                image: img26
            },
            // {
            //     id: 2,
            //     image: img2
            // },
            // {
            //     id: 3,
            //     image: img3
            // }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 100,
        "SalesPrice": 70,
        "ProductDiscount": 30,
        "ProductDiscountType": "Percentage",
        "ProductTax": 20,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 20,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Viraj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Harshal Jain",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    }   
]
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <BannerSlider />
      
      <Product_Sidebar />
      {/* <Footer1 /> */}

      <div className='slidercont'>
        <ProductsSlider products={products} categoryname='Fresh Vegetables' />
      </div>
      <div className='slidercont'>
        <ProductsSlider products={products2} categoryname='Fresh Fruits' />
      </div>
      <HomeCategories />
      <Footer2 />
    </div>
  )
}

export default Home