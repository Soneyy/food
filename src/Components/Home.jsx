import React, { useEffect, useState } from "react";
import home from "../assets/home.png";
import { IoMdClose } from "react-icons/io";
import img1 from "../assets/menu/img1.png";
import img2 from "../assets/menu/img2.png";
import img3 from "../assets/menu/img3.jpg";
import img4 from "../assets/menu/img4.jpg";
import img5 from "../assets/menu/img5.jpg";
import img6 from "../assets/menu/img6.jpg";
import img7 from "../assets/menu/img7.jpg";
import img8 from "../assets/menu/img8.jpg";
import home1 from "../assets/home1.png";
import food1 from "../assets/food/food1.png";
import food2 from "../assets/food/food2.png";
import food3 from "../assets/food/food3.png";
import food4 from "../assets/food/food4.png";
import food5 from "../assets/food/food5.png";
import food6 from "../assets/food/food6.png";
import card1 from "../assets/card/card1.jpg";
import card2 from "../assets/card/card2.jpg";
import card3 from "../assets/card/card3.jpg";
import card11 from "../assets/card/card11.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import card12 from "../assets/card/card12.jpg";
import card13 from "../assets/card/card13.jpg";
import card14 from "../assets/card/card14.jpg";
import card15 from "../assets/card/card15.jpg";
import card16 from "../assets/card/card15.jpg";
import card21 from "../assets/card/card21.jpg";
import card22 from "../assets/card/card22.jpg";
import card23 from "../assets/card/card23.jpg";
import card24 from "../assets/card/card24.jpg";
import card31 from "../assets/card/card31.jpg";
import card32 from "../assets/card/card32.jpg";
import { MdLocationOn } from "react-icons/md";
import news1 from "../assets/news/news1.jpg";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  { name: "Jhamshikhel", url: "https://foodmandu.com/Restaurant/Details/324" },
  { name: "Lazimpat", url: "https://foodmandu.com/Restaurant/Details/1664" },
  { name: "Boudha", url: "https://foodmandu.com/Restaurant/Details/845" },
];

const Home = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const toggleMenu = (section) => {
    setVisibleSection(visibleSection === section ? "" : section);
  };

  return (
    <>
      <div
        className="font-poppins pt-20 md:pt-60 flex flex-col md:flex-row items-center mx-auto max-w-screen-xl"
        id="home"
      >
        <div className="md:w-1/2 p-4 md:mb-0">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 md:mb-10">
            Welcome to PHO99
          </h1>
          <p className="text-lg mb-10">
            Let Vietnam's culinary symphony serenade your senses, as each dish
            whispers tales of heritage, culture, and epicurean delight.
          </p>
          <button
            className="hover-bg-scroll border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-base py-1 px-8"
            onClick={() => toggleMenu("menu")}
          >
            See Menu
          </button>
        </div>
        <div className="md:w-1/2 p-4 flex justify-end image-container relative">
         
          <img src={home} className="rotated-image" alt="Home" />
        </div>
        {/* Menu Popup */}
        {visibleSection === "menu" && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
            <div className="bg-white p-8 max-w-3xl w-full absolute right-0 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl text-primary font-bold mb-2">
                  Our Menu
                </h2>
                <button
                  className="text-gray-600 hover:text-primary text-4xl"
                  onClick={() => toggleMenu("menu")}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="mb-6 p-4">
                <div className="flex mb-4">
                  <div className="flex border border-gray-200 rounded-lg mr-2 text-gray-600">
                    <span className="inline-block px-4 py-2">Pick Up</span>
                  </div>
                  <div className="flex border border-gray-200 rounded-lg mr-2 text-gray-600">
                    <span className="inline-block px-4 py-2">Delivery</span>
                  </div>
                  <div className="flex border border-gray-200 rounded-lg text-gray-600">
                    <span className="inline-block px-4 py-2">Eat In</span>
                  </div>
                </div>
                <p className="mb-4">Please, directly call us at:</p>
                <ul className="mb-4">
                  <li>Jhamshikhel: 980-320-3119</li>
                  <li>Lazimpat: 01-454-3330</li>
                  <li>Boudha: 980-114-3330</li>
                </ul>
                <p className="mb-2">
                  Note: For foodmandu delivery please click on the following
                  links.
                </p>
                <ul className="flex mb-4">
                  {links.map((link, index) => (
                    <li key={index} className="mr-2">
                      <a
                        href={link.url}
                        className="flex items-center border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-base py-1 px-8 hover-bg-scroll"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <h2 className="mb-2 text-3xl font-bold">DRINKS MENU</h2>
                <p className="text-gray-600">See all our drinks menu</p>
                <div className="flex flex-col mt-4 gap-4">
                  <div>
                    <img src={img1} alt="Menu Image 1" />
                    <p> Deep Fried Shrimp Rolls</p>
                    <p>Rs. 400</p>
                  </div>
                  <img src={img2} alt="Menu Image 2" />
                  <img src={img3} alt="Menu Image 3" />
                  <img src={img4} alt="Menu Image 4" />
                  <img src={img5} alt="Menu Image 5" />
                  <img src={img6} alt="Menu Image 6" />
                  <img src={img7} alt="Menu Image 7" />
                  <img src={img8} alt="Menu Image 8" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black "></div>
          <div className="slider-container">
            <div className="slider"></div>
          </div>
        </div> */}

      <div
        className="font-poppins pt-20 md:pt-40   flex flex-col md:flex-row items-center mx-auto max-w-screen-xl"
        id="pho99"
      >
        <div className="md:w-1/2 p-4 md:mb-0">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 md:mb-10">
            Our Story
          </h1>
          <p className="text-lg mb-10">
            Our Vietnamese restaurant is rooted in a love for sharing the
            authentic flavors of our culture through fresh, traditional dishes.
            Come savor the stories of Vietnam with us.
          </p>
          <button
            className="hover-bg-scroll border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-base py-1 px-8"
            onClick={() => toggleMenu("pho99")}
          >
            Learn more
          </button>
        </div>
        <div className="md:w-1/2 p-4 flex justify-end image-container mt-10 md:mt-0">
          <img
            src={home1}
            className="w-full  lg:w-1/2 rotated-image"
            alt="Home"
          />
        </div>
        {/* Menu Popup */}
        {visibleSection === "pho99" && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
            <div className="bg-white p-8 max-w-3xl w-full absolute right-0 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl text-primary font-bold mb-2">
                  About Us
                </h2>
                <button
                  className="text-gray-600 hover:text-primary text-4xl"
                  onClick={() => toggleMenu("pho99")}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="flex justify-center mb-4">
                <img
                  className="md:w-1/4 p-4"
                  src={home1}
                  alt="Restaurant Image"
                />
              </div>
              <div>
                <p>
                  Pho99 Nepal serves authentic Vietnamese food. Vietnamese
                  dishes are typically prepared with fresh herbs such as
                  cilantro, ginger, lemongrass, mint, and basil, and often
                  served with fish sauce, shrimp paste, or soybean sauce on the
                  side. Because Vietnamese food is cooked with minimal oil,
                  select spices, and fresh ingredients, it is considered one of
                  the healthiest cuisines in the world. Pho99 Nepal reflects the
                  amazing food culture of Vietnam, which says you don’t have to
                  go looking for great food - great food finds you! You never go
                  hungry in Vietnam. Great food is everywhere; street corners,
                  alleyways, outdoor cafes, or served in the finest restaurants
                  or from street food carts. Pho99 currently has three
                  locations. One is in expat community area of Jhamsikhel,
                  Lalitpur, another is located at prime location of Lazimpat,
                  right across from hotel Shangri-La while the third one is
                  situated right at Boudhnath stupa, a World Heritage Site; when
                  you enter from the main gate of Stupa, you will find it right
                  on your left after 5 to 6 shops. All our locations have simple
                  yet inviting decor awaits you - do visit us soon! Our Gallery
                  Discover the artistry and care that goes into each plate
                  before it arrives at your table.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="font-poppins pt-20 md:pt-40 flex flex-col md:flex-row items-center mx-auto max-w-screen-xl"
        id="menu"
      >
        <div className="md:w-1/2 p-4 md:mb-0">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 md:mb-10">
            Our Menu
          </h1>
          <p className="text-lg mb-10">
            Savor the vibrant and authentic flavors of Vietnam with our
            carefully curated menu, featuring classic dishes and regional
            specialties.
          </p>
          <button
            className="hover-bg-scroll border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-base py-1 px-8"
            onClick={() => toggleMenu("menu")}
          >
            See Menu
          </button>
        </div>
        <div className="md:w-1/2 p-4 grid grid-cols-3 mr-2 mt-20 ">
          <div className="p-2  border-2 border-primary flex flex-col items-center">
            <img
              src={food1}
              alt="Food 1"
              className="w-full rounded-lg"
              style={{ maxHeight: "100px" }}
            />
            <div className="flex flex-col items-start mt-2">
              <p className="text-sm font-bold">Deep Fried Shrimp Rolls</p>
              <p className="text-sm font-bold text-primary">Rs. 400</p>
            </div>
          </div>
          <div className="p-2 border-2 border-primary flex flex-col items-center">
            <img
              src={food2}
              alt="Food 2"
              className="w-full rounded-lg"
              style={{ maxHeight: "100px" }}
            />
            <div className="flex flex-col items-start mt-2">
              <p className="text-sm font-bold">Bo Tron Cu Hanh</p>
              <p className="text-xs text-gray-500">Grilled beef salad</p>
              <p className="text-sm font-bold text-primary">Rs. 630</p>
            </div>
          </div>
          <div className="p-2 border-2 border-primary flex flex-col items-center">
            <img
              src={food3}
              alt="Food 3"
              className="w-full rounded-lg"
              style={{ maxHeight: "100px" }}
            />
            <div className="flex flex-col items-start mt-2">
              <p className="text-sm font-bold">Goi Ga Tron Mien</p>
              <p className="text-xs text-gray-500">
                Chicken salad w/ glass noodles
              </p>
              <p className="text-sm font-bold text-primary">Rs. 450</p>
            </div>
          </div>
          <div className="p-2  border-2 border-primary flex flex-col items-center">
            <img
              src={food4}
              alt="Food 4"
              className="w-full rounded-lg"
              style={{ maxHeight: "100px" }}
            />
            <div className="flex flex-col items-start  mt-2">
              <p className="text-sm font-bold">Goi Tep Tron Mient</p>
              <p className="text-xs text-gray-500">
                Shrimp salad w/ glass noodles
              </p>
              <p className="text-sm font-bold text-primary">Rs. 650</p>
            </div>
          </div>
          <div className="p-2  border-2 border-primary flex flex-col items-center">
            <img
              src={food5}
              alt="Food 5"
              className="w-full rounded-lg"
              style={{ maxHeight: "100px" }}
            />
            <div className="flex flex-col items-start mt-2">
              <p className="text-sm font-bold">
                Stir Fried Crispy & Spicy Shrimps
              </p>
              <p className="text-xs text-gray-500">(8 pcs)</p>
              <p className="text-sm font-bold text-primary">Rs. 850</p>
            </div>
          </div>
          <div className="p-2 border-2 border-primary flex flex-col items-center">
            <img
              src={food6}
              alt="Food 6"
              className="w-full rounded-lg"
              style={{ maxHeight: "100px" }}
            />
            <div className="flex flex-col items-start mt-2">
              <p className="text-sm font-bold">Goi Du Du</p>
              <p className="text-xs text-gray-500">Green papaya salad</p>
              <p className="text-sm font-bold text-primary">Rs. 400</p>
            </div>
          </div>
        </div>

        {/* Menu Popup */}
        {visibleSection === "menu" && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-pink-300 bg-opacity-5 backdrop-blur-sm"></div>
            <div className="bg-white p-8 max-w-3xl w-full absolute right-0 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl text-primary font-bold mb-2">
                  Our Menu
                </h2>
                <button
                  className="text-gray-600 hover:text-primary text-4xl"
                  onClick={toggleMenu}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="mb-6 p-4">
                <div className="flex mb-4">
                  <div className="flex border border-gray-200 rounded-lg mr-2 text-gray-600">
                    <span className="inline-block px-4 py-2">Pick Up</span>
                  </div>
                  <div className="flex border border-gray-200 rounded-lg mr-2 text-gray-600">
                    <span className="inline-block px-4 py-2">Delivery</span>
                  </div>
                  <div className="flex border border-gray-200 rounded-lg text-gray-600">
                    <span className="inline-block px-4 py-2">Eat In</span>
                  </div>
                </div>
                <p className="mb-4">Please, directly call us at:</p>
                <ul className="mb-4">
                  <li>Jhamshikhel: 980-320-3119</li>
                  <li>Lazimpat: 01-454-3330</li>
                  <li>Boudha: 980-114-3330</li>
                </ul>
                <p className="mb-2">
                  Note: For foodmandu delivery please click on the following
                  links.
                </p>
                <ul className="flex mb-4">
                  {links.map((link, index) => (
                    <li key={index} className="mr-2">
                      <a
                        href={link.url}
                        className="flex items-center border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-base py-1 px-8 hover-bg-scroll"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <h2 className="mb-2 text-3xl font-bold">DRINKS MENU</h2>
                <p className="text-gray-600">See all our drinks menu</p>
                <div className="flex flex-col mt-4 gap-4">
                  <img src={img1} alt="Menu Image 1" />
                  <img src={img2} alt="Menu Image 2" />
                  <img src={img3} alt="Menu Image 3" />
                  <img src={img4} alt="Menu Image 4" />
                  <img src={img5} alt="Menu Image 5" />
                  <img src={img6} alt="Menu Image 6" />
                  <img src={img7} alt="Menu Image 7" />
                  <img src={img8} alt="Menu Image 8" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="flex flex-col  md:pt-40 md:flex-row md:justify-between items-start md:items-center font-poppins pt-20 md:pt-50  mx-auto max-w-screen-xl "
        id="location"
      >
        <div className="md:w-1/2 p-4 md:mt-40 ">
          <h1 className="font-bold text-5xl md:text-6xl  mb-6 md:mb-10">
            Location
          </h1>
          <p className="text-lg mb-10">
            Discover the authentic taste of Vietnam at our restaurant,
            conveniently located in Kathmandu, where we bring the vibrant
            flavors of Vietnam to your table.
          </p>
        </div>
        <div className="md:w-3/5 p-4 grid grid-cols-3 gap-4">
          <div className="border border-white rounded flex flex-col items-center">
            <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-t-lg">
              <img
                src={card1}
                alt="Food 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start mt-2 p-2 gap-2">
              <p className="text-sm font-bold">Jhamshikhel</p>
              <p className="text-xs text-gray-500">
                We are located right at Thadodhunga chowk in...
              </p>
              <p className="text-xs text-gray-500">980-320-3119</p>
              <button
                className="hover-bg-scroll border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-xs py-1 px-2"
                onClick={() => toggleMenu("jhamshikhel")}
              >
                Read more
              </button>
            </div>
          </div>
          <div className="border border-white rounded flex flex-col items-center ">
            <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-t-lg">
              <img
                src={card2}
                alt="Food 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start mt-2 p-2 gap-2">
              <p className="text-sm font-bold">Lazimpat</p>
              <p className="text-xs text-gray-500">
                We are located right at Thadodhunga chowk in...
              </p>
              <p className="text-xs text-gray-500">01-454-3330</p>
              <button
                className="hover-bg-scroll border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-xs py-1 px-2"
                onClick={() => toggleMenu("lazimpat")}
              >
                Read more
              </button>
            </div>
          </div>
          <div className="border border-white rounded flex flex-col items-center">
            <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-t-lg">
              <img
                src={card3}
                alt="Food 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start mt-2 p-2 gap-2">
              <p className="text-sm font-bold">Boudha</p>
              <p className="text-xs text-gray-500">
                We are located right at Boudhanath Stupa, a W...
              </p>
              <p className="text-xs text-gray-500">980-114-3330</p>
              <button
                className="hover-bg-scroll border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-xs py-1 px-2"
                onClick={() => toggleMenu("boudha")}
              >
                Read more
              </button>
            </div>
          </div>
        </div>

        {visibleSection === "jhamshikhel" && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
            <div className="bg-white p-8 max-w-3xl w-full absolute right-0 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl text-primary font-bold mb-2">
                  Jhamshikhel
                </h2>
                <button
                  className="text-gray-600 hover:text-primary text-4xl"
                  onClick={() => toggleMenu("jhamshikhel")}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="w-full">
                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  className="w-full"
                >
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card11}
                      alt="Jhamshikhel Image 1"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card13}
                      alt="Jhamshikhel Image 3"
                      className="w-full h-full object-cover rounded-lg "
                    />
                  </div>
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card14}
                      alt="Jhamshikhel Image 4"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </Carousel>
              </div>
              <div className="mt-4">
                <p className="mb-4">
                  We are located right at Thadodhunga chowk in Jhamsikhel,
                  Lalitpur between the Sterling Apartments and Bajra &
                  Shangri-La Residency. The ambiance is cozy, with indoor as
                  well as outdoor seating in a courtyard garden under open sky
                  surrounded by a variety of flowers and plants. There is even
                  an upper level open deck. Our indoor seating is non-smoking
                  and the arrangement of tables and chairs creates an elegant
                  vibe where you can enjoy our drinks, food, and friendly
                  service. Parking is available right across from our restaurant
                  in Southern side.
                </p>
                <p className=" mb-4 text-primary">
                  For any questions and inquiries, please call us at
                  980-320-3119 or email us at info@pho99nepal.com
                </p>
              </div>
            </div>
          </div>
        )}
        {visibleSection === "lazimpat" && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
            <div className="bg-white p-8 max-w-3xl w-full absolute right-0 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl text-primary font-bold mb-2">
                  Lazimpat
                </h2>
                <button
                  className="text-gray-600 hover:text-primary text-4xl"
                  onClick={() => toggleMenu("lazimpat")}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="w-full">
                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  className="w-full"
                >
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card21}
                      alt="Jhamshikhel Image 1"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card22}
                      alt="Jhamshikhel Image 3"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card23}
                      alt="Jhamshikhel Image 3"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card24}
                      alt="Jhamshikhel Image 3"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </Carousel>
              </div>
              <div className="mt-4">
                <p className="mb-4">
                  Our newly renovated location in Lazimpat is centrally situated
                  in a popular area of Kathmandu. It is right across from Hotel
                  Shangri-La - a two and a half story white building with ample
                  parking. The redesigned interior is both vibrant and
                  comfortable, with settings that accommodate families, friends
                  and business gatherings. Indoor seating is no-smoking while
                  the balcony seating is designated for smoking. There is
                  limited outdoor seating, where you can enjoy the flowers and
                  plants on our terrace and a view of Hotel Shangri-La. We also
                  have a private dining room for up to 10 people.
                </p>
                <p className=" mb-4 text-primary">
                  For any questions and inquiries, please call us at 01-454-3330
                  or 981-830-6955 email us at info@pho99nepal.com
                </p>
              </div>
            </div>
          </div>
        )}

        {visibleSection === "boudha" && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
            <div className="bg-white p-8 max-w-3xl w-full absolute right-0 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl text-primary font-bold mb-2">Boudha</h2>
                <button
                  className="text-gray-600 hover:text-primary text-4xl"
                  onClick={() => toggleMenu("boudha")}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="w-full">
                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  className="w-full"
                >
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card31}
                      alt="Jhamshikhel Image 1"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card32}
                      alt="Jhamshikhel Image 3"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </Carousel>
              </div>
              <div className="mt-4">
                <p className="mb-4">
                  We are located right at Boudhanath Stupa, a World Heritage
                  site. As you enter from the main gate of Boudhanath, you will
                  find us on your left after passing six shops. We have three
                  and half story indoor seating, while the fourth and fifth
                  story are open terraces, affording magnificent views of the
                  stupa. Except terraces, our indoor seating is no-smoking.
                  Indoor seating is very comfortable with pleasant decor. It is
                  a great place for groups as well as solo dinners.
                </p>
                <p className=" mb-4 text-primary">
                  For any questions and inquiries, please call us at
                  980-114-3330 or email us at info@pho99nepal.com
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="font-poppins pt-20 md:pt-60 flex flex-col md:flex-row items-center mx-auto max-w-screen-xl"
        id="gallery"
      >
        <div className="md:w-1/2 p-4 md:mb-0">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 md:mb-10">
            Our Gallery
          </h1>
          <p className="text-lg mb-10">
            Discover the artistry and care that goes into each plate before you
            even take your first bite.
          </p>
          <button
            className="hover-bg-scroll border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-base py-1 px-8"
            onClick={() => toggleMenu("gallery")}
          >
            See More
          </button>
        </div>
        <div className="md:w-1/2 grid grid-cols-3 gap-2">
          <div className="col-span-1 flex flex-col items-center">
            <img
              src={card11}
              alt="Image 1"
              className="w-full h-auto rounded-lg  mt-10 mb-2"
            />
            <img
              src={card16}
              alt="Image 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <img
              src={card13}
              alt="Image 3"
              className="w-full h-auto rounded-lg mb-4"
            />
            <img
              src={card14}
              alt="Image 4"
              className="w-full h-auto rounded-lg mb-4"
            />
            <img
              src={card15}
              alt="Image 5"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <img
              src={card16}
              alt="Image 6"
              className="w-full h-auto rounded-lg mt-10 mb-2"
            />
            <img
              src={card1}
              alt="Image 7"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        {visibleSection === "gallery" && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
            <div className="bg-white p-8 max-w-3xl w-full absolute right-0 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl text-primary font-bold mb-2">
                  Our Gallery
                </h2>
                <button
                  className="text-gray-600 hover:text-primary text-4xl"
                  onClick={() => toggleMenu("gallery")}
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="w-full">
                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  className="w-full"
                >
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card11}
                      alt="Jhamshikhel Image 1"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card22}
                      alt="Jhamshikhel Image 3"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card23}
                      alt="Jhamshikhel Image 3"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center h-64">
                    <img
                      src={card24}
                      alt="Jhamshikhel Image 3"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </Carousel>
              </div>

              <div className="grid grid-cols-4 grid-rows-4 gap-4 mt-4">
                <img
                  src={card1}
                  className="w-full h-full object-cover"
                  alt="Gallery Image 1"
                />
                <img
                  src={card2}
                  className="w-full h-full object-cover "
                  alt="Gallery Image 2"
                />
                <img
                  src={card3}
                  className="w-full h-full object-cover "
                  alt="Gallery Image 3"
                />
                <img
                  src={card11}
                  className="w-full h-full object-cover "
                  alt="Gallery Image 4"
                />
                <img
                  src={card13}
                  className="w-full h-full object-cover "
                  alt="Gallery Image 5"
                />
                <img
                  src={card14}
                  className="w-full h-full object-cover "
                  alt="Gallery Image 6"
                />
                <img
                  src={card15}
                  className="w-full h-full object-cover "
                  alt="Gallery Image 7"
                />
                <img
                  src={card16}
                  className="w-full h-full object-cover "
                  alt="Gallery Image 8"
                />
                <img
                  src={card21}
                  className="w-full h-full object-cover "
                  alt="Gallery Image 9"
                />
                <img
                  src={card22}
                  className="w-full h-full object-cover"
                  alt="Gallery Image 10"
                />
                <img
                  src={card23}
                  className="w-full h-full object-cover "
                  alt="Gallery Image 11"
                />
                <img
                  src={card24}
                  className="w-full h-full object-cover "
                  alt="Gallery Image 12"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="font-poppins pt-20 md:pt-60 md:pb-40 flex flex-col md:flex-row items-center mx-auto max-w-screen-xl"
        id="vacancy"
      >
        <div className="md:w-1/2 p-4 md:mb-0">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 md:mb-10">
            Vacancy
          </h1>
          <p className="text-lg mb-10">
            Join our culinary family and experience a rewarding career in the
            art of flavors.
          </p>
          <button
            className="hover-bg-scroll border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-base py-1 px-8"
            onClick={() => toggleMenu("vacancy")}
          >
            See CV
          </button>
        </div>

        <div className="flex  items-center gap-6">
          <div className="border border-white shadow-lg rounded-2xl flex flex-col items-center gap-5 relative">
            <div className="flex flex-col items-center w-60 mt-2 p-2 gap-4">
              <p className="bg-primary border border-red-500 rounded-tl-lg rounded-br-lg px-2 py-1 text-start absolute top-0 left-0">
                Urgent
              </p>
              <p className="text-sm font-bold text-center mt-8">Bartender</p>
              <p className="text-xs text-primary text-center flex items-center">
                <MdLocationOn className="text-primary mr-1" /> Lazimpat
              </p>
              <p className="text-xs text-gray-500 text-center">
                Looking for at least two experienced person to help us with
                serving our customer.
              </p>
              <p className="text-xs font-bold text-gray-700 text-center">
                Salary: Based on experience and skills Contact No: 9802043330
              </p>

              <button
            className="hover-bg-scroll border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-xs py-1 px-2"
            onClick={() => toggleMenu("vacancy")}
          >
            Apply now
          </button>
            </div>
          </div>

          <div className="border border-white shadow-lg rounded-2xl flex flex-col items-center relative">
            <div className="flex flex-col items-center mt-2 p-2 w-60 gap-4">
              <p className="bg-primary border border-red-500 rounded-tl-lg rounded-br-lg px-2 py-1 text-start absolute top-0 left-0">
                Urgent
              </p>
              <p className="text-sm font-bold text-center mt-8">Waiter</p>
              <p className="text-xs text-gray-500 text-center flex items-center">
                <MdLocationOn className="text-red-500 mr-1" /> Lazimpat
              </p>
              <p className="text-xs text-gray-500 text-center">
                Looking for at least two experienced person to help us with
                serving our customer.
              </p>
              <p className="text-xs font-bold text-gray-700 text-center">
                Salary: Based on experience and skills Contact No: 9802043330
              </p>

              <button
            className="hover-bg-scroll border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-xs py-1 px-2"
            onClick={() => toggleMenu("vacancy")}
          >
            Apply now
          </button>
            </div>
          </div>
        </div>

        {visibleSection === "vacancy" && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
            <div className="bg-white p-8 max-w-3xl w-full absolute right-0 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2
                  className="text-3xl text-primary font-bold mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Job Application Form
                </h2>
                <button
                  className="text-gray-600 hover:text-primary text-4xl"
                  onClick={() => toggleMenu("vacancy")}
                >
                  <IoMdClose />
                </button>
              </div>
              <form
                className="space-y-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.875rem",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">First Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Last Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Mobile No.</label>
                    <input
                      type="tel"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">
                    What position are you applying for?
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Cook</option>
                    <option>Assistent cook</option>
                    <option>Waiter</option>
                    <option>Jr.Waiter</option>
                    <option>Manager</option>
                    <option>Security guard</option>
                    <option>Cleaner</option>
                    <option>Dishwasher</option>
                    <option>Cashier</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">CV</label>
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </form>
              <div className="mt-8">
                <h3
                  className="text-1xl font-bold mb-4 text-gray-700"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Job Description
                </h3>
                <ul
                  className="list-disc pl-5 space-y-2 text-gray-600"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.875rem",
                  }}
                >
                  <li>Excellent communication and customer service skills.</li>
                  <li>Teamwork and collaboration with staff members.</li>
                  <li>
                    Attention to detail in recipe preparation and presentation.
                  </li>
                  <li>
                    Ability to work under pressure in a fast-paced kitchen.
                  </li>
                  <li>
                    Understanding of food safety and sanitation guidelines.
                  </li>
                  <li>
                    Knowledge of food and beverages, including dietary
                    considerations.
                  </li>
                </ul>
              </div>
              <div className="mt-4 hover-bg-scroll">
                <button
                  type="submit"
                  className=" border-2 border-primary rounded-full text-primary hover:text-white cursor-pointer text-base py-1 px-8"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.875rem",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="font-poppins pt-20 md:pt-60 md:pb-40 flex flex-col md:flex-row items-center mx-auto max-w-screen-xl"
        id="news"
      >
        <div className="md:w-1/2 p-4 md:mb-0">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 md:mb-10">News</h1>
          <p className="text-lg mb-10">
            Find out what's new and exciting at our Vietnamese restaurant, from
            seasonal specials to collaborations and beyond.
          </p>
        </div>

        <div className="md:w-4/5 p-4 grid grid-cols-3 gap-4">
          <div className="border border-white rounded-3xl shadow-lg flex flex-col items-center">
            <div className="w-full h-32 flex items-center justify-center overflow-hidden rounded-t-lg">
              <img
                src={news1}
                alt="News 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start mt-2 p-4 gap-4">
              <p className="text-sm font-bold">
                भियतनामी स्वाद पस्किने 'फो ९९ रेष्टुरेन्ट' लाजिम्पाटमा
              </p>
              <p className="text-xs text-gray-500">
                काठमाडौं- भियतनामी परिकारका पारखीहरुलाई लक्षित गर्दै काठमाडौंको.
              </p>
              <button
            className="hover-bg-scroll border-2 border-primary rounded-full text-black hover:text-white cursor-pointer text-xs py-0 px-2"
            onClick={() => toggleMenu("viewMore")}
          >
            Read more
          </button>
            </div>
          </div>

          <div className="border border-white rounded-3xl shadow-lg flex flex-col items-center">
            <div className="w-full h-32 flex items-center justify-center overflow-hidden rounded-t-lg">
              <img
                src={news1}
                alt="News 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start mt-2 p-4 gap-4">
              <p className="text-sm font-bold">
                Vietnamese ‘Pho 99 Restaurant’ opens its outlet..
              </p>
              <p className="text-xs text-gray-500">
                KATHMANDU, July 13: Pho 99 Restaurant, a Vietnamese eater...
              </p>
              <button
            className="hover-bg-scroll border-2 border-primary rounded-full text-black hover:text-white cursor-pointer text-xs py-0 px-2"
            onClick={() => toggleMenu("viewMore")}
          >
            Read more
          </button>
            </div>
          </div>

          <div className="border bg-secondary rounded-3xl shadow-lg flex flex-col items-center justify-center w-1/2">
            <button
              className="cursor-pointer text-base py-2 px-4"
              onClick={() => toggleMenu("viewMore")}
            >
              View More
            </button>
          </div>

          {visibleSection === "viewMore" && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>
              <div className="bg-white p-8 max-w-3xl w-full absolute right-0 h-full overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl text-primary font-bold mb-2">
                    All News
                  </h2>
                  <button
                    className="text-gray-600 hover:text-primary text-4xl"
                    onClick={() => toggleMenu("viewMore")}
                  >
                    <IoMdClose />
                  </button>
                </div>
                <img
                  src={news1}
                  alt="News 1"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="p-4">
                  <p className="text-m font-bold mb-4">
                    भियतनामी स्वाद पस्किने 'फो ९९ रेष्टुरेन्ट' लाजिम्पाटमा
                  </p>
                  <p className="text-xs text-gray-500 ">
                    काठमाडौं- भियतनामी परिकारका पारखीहरुलाई लक्षित गर्दै
                    काठमाडौंको लाजिम्पाटमा ‘फो ९९ रेष्टुरेन्ट’ खुलेको छ।
                    लाजिम्पाटस्थित होटल सांग्रिला अगाडि खोलिएको रेष्टुरेन्टको
                    नेपाल
                  </p>
                </div>
                <button className="hover:bg-scroll border-2 border-primary rounded-full text-black hover:text-white cursor-pointer text-xs py-1 px-2 self-start">
                  Read More
                </button>
                <div className="bg-white p-8 max-w-3xl w-full absolute right-0 h-full overflow-y-auto mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <img
                      src={news1}
                      alt="News 1"
                      className="w-full h-[300px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start mt-2 p-4 gap-4">
                    <p className="text-sm font-bold">
                      Vietnamese ‘Pho 99 Restaurant’ opens its outlet..
                    </p>
                    <p className="text-xs text-gray-500">
                      KATHMANDU, July 13: Pho 99 Restaurant, a Vietnamese
                      eater...
                    </p>
                    <button className="hover:bg-scroll border-2 border-primary rounded-full text-black hover:text-white cursor-pointer text-xs py-1 px-2">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="font-poppins pt-20 md:pt-60 md:pb-40 flex flex-col md:flex-row items-center mx-auto max-w-screen-xl"
        id="contact"
      >
        <div className="md:w-1/2 p-4 md:mb-0">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 md:mb-10">
            Contact Us
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-80">
            <p className="text-lg">E-MAIL:</p>
            <p className="text-lg">Telephone:</p>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-52">
            <p className="text-lg mb-4">pho99info@gmail.com</p>
            <p className="text-lg">9803203119</p>
          </div>

          <div className="flex items-center mt-8 gap-2">
            <a
              href="https://www.facebook.com/pho99therestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-lg mx-4"
            >
              {" "}
             
              <FaFacebook className="text-gray-600 text-lg" />
            </a>
            <a
              href="https://www.facebook.com/pho99therestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-lg mx-4"
            >
              {" "}
              
              <IoLogoInstagram className="text-gray-600 text-lg" />
            </a>
          </div>
        </div>

        <div className="md:w-1/3 p-4 flex flex-col items-end">
          <form
            className="flex flex-col gap-4"
            style={{ minWidth: "250px", maxWidth: "300px" }}
          >
            {" "}
            
            <label className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 p-1 rounded-lg"
              />
            </label>
            <label className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-1 rounded-lg"
              />
            </label>
            <label className="flex flex-col">
              <input
                placeholder="Message"
                className="border border-gray-300 p-1 rounded-lg"
                rows="4"
              ></input>{" "}
              {/* Changed input type to textarea for message */}
            </label>
          </form>

          <button className="hover-bg-scroll border-2 mt-4 mr-40 border-primary rounded-full text-primary hover:text-white cursor-pointer text-base py-0 px-4">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
