import React from 'react';

const categories = [
  { name: 'Chair', imageUrl:'https://sofaz.vn/upload/images/truong/nhap-khau/ghe-an-nhap-khau/ghe-an-hien-dai-cao-cap-2-.jpg' },
  { name: 'Table', imageUrl:'https://bamboofurni.com/images/companies/1/Blog/H%C3%ACnh%20%E1%BA%A3nh/Ph%C3%B2ng%20L%C3%A0m%20Vi%E1%BB%87c%20%C4%90%E1%BA%B9p/B%C3%A0n%20L%C3%A0m%20Vi%E1%BB%87c%20G%E1%BB%97/38.ban-go-lam-viec.jpg?1557387292943' },
  { name: 'Lamp', imageUrl: 'https://down-th.img.susercontent.com/file/sg-11134201-7rblx-lq2c21y7r24k4c' },
  { name: 'Tree', imageUrl: 'https://media.istockphoto.com/id/1380361370/vi/anh/c%C3%A2y-chu%E1%BB%91i-trang-tr%C3%AD-trong-b%C3%ACnh-b%C3%AA-t%C3%B4ng-c%C3%A1ch-ly-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=WT9ig3iO4qEEZLkFDasDG_tj_2r_Xy0nj5gO77_RUZc=' },
  { name: 'Item', imageUrl: 'https://noithatvuongphat.com/wp-content/uploads/2023/03/Anh-2-Tu-quan-ao-go-cong-nghiep-voi-duong-net-thiet-ke-hien-dai.jpg' },
];

const CategoryCard = ({ category }) => (
  <div className="flex flex-col items-center m-4 bg-white rounded-lg shadow-md">
    <img className="w-full h-32 rounded-t-lg" src={category.imageUrl} alt={category.name} />
    <div className="p-9">
      <h2 className="font-bold">{category.name}</h2>
    </div>
  </div>
);

const Category = () => (
  <div className="flex flex-wrap justify-center p-4">
    {categories.map((category) => (
      <CategoryCard key={category.name} category={category} />
    ))}
  </div>
);

export default Category;