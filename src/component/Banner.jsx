import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full rounded">
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://media.gettyimages.com/id/2152266842/photo/middle-school-students-in-class-doing-writing-assignment.jpg?s=612x612&w=gi&k=20&c=eE6t1V4PD8oaM69bsxzAndsdOoUivA3VJjQn9monsW8="
            className="w-full max-h-96"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqqY75IYPGHUmZMY_-_lXLS_ShMUoAplHJ-kvee1soDRidJPReJ7iX-NZqFdRWKgHSU_I&usqp=CAU"
            className="w-full max-h-96"
          />
        </div>
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPd0YgToG4GwH3jdhqc2mAxGwwtbusA5Gew&s"
            className="w-full max-h-96"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qik5ZDHc2Lt6wdVj249e7sPhrhex_8APUg&s"
            className="w-full max-h-96"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
