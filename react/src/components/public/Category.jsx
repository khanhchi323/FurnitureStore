import React, { useState } from 'react';

const categories = [
  { name: 'Chair', imageUrl:'https://sofaz.vn/upload/images/truong/nhap-khau/ghe-an-nhap-khau/ghe-an-hien-dai-cao-cap-2-.jpg' },
  { name: 'Lamp', imageUrl: 'https://down-th.img.susercontent.com/file/sg-11134201-7rblx-lq2c21y7r24k4c' },
  { name: 'carpet', imageUrl: 'https://tileandcarpet.co.ke/wp-content/uploads/2022/10/KBGIZA12_2_1.jpg' },
  { name: 'Item', imageUrl: 'https://noithatvuongphat.com/wp-content/uploads/2023/03/Anh-2-Tu-quan-ao-go-cong-nghiep-voi-duong-net-thiet-ke-hien-dai.jpg' },
  { name: 'bed', imageUrl: 'https://www.ikea.com/sa/en/images/products/idanaes-bed-frame-dark-brown-loenset__1101606_pe866776_s5.jpg' },
  { name: 'mirror', imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/l0pm3680/mirror/z/h/g/frameless-round-frame-wall-mirror-with-touch-sensor-light-for-original-imagcfsqceynvmjz.jpeg?q=90&crop=false' },
  { name: 'table', imageUrl: 'https://admin.regalfurniturebd.com/storage/uploads/fullsize/2023-04/rth-204view-01vraydenoiser.jpg' },
];

const CategoryCard = ({ category }) => (
  <div className="flex flex-col items-center m-4 bg-white rounded-lg shadow-md w-full h-40">
    <img className="w-40 h-full rounded-t-lg object-cover" src={category.imageUrl} alt={category.name} />
    <div className="p-2">
      <h2 className="font-bold">{category.name}</h2>
    </div>
  </div>
);

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCategory = () => {
    if (currentIndex < categories.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCategory = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <button onClick={prevCategory} className="p-2 bg-gray-500 text-white rounded-lg mr-2">
          ←
        </button>
        {categories.slice(currentIndex, currentIndex + 5).map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
        <button onClick={nextCategory} className="p-2 bg-gray-500 text-white rounded-lg ml-2">
          →
        </button>
      </div>
    </>
  );
};

export default Category;
