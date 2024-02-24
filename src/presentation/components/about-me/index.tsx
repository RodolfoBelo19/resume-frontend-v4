import React from "react";

export const AboutMe = () => {
  return (
    <section className="p-5 mt-32 relative flex justify-between rounded-xl backdrop-blur-sm bg-white max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="p-1 rounded-full box-gradient-border absolute -left-20 -top-20">
          <img src="profile.jpeg" className="w-32 rounded-full" />
        </div>
        <h3 className="sm:text-xl text-md text-center text-black px-32">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          nobis quas sapiente, quis quia consequatur non reiciendis culpa a
          incidunt magnam ad repellat commodi ab? Quis necessitatibus assumenda
          repudiandae ipsa. 
        </h3>
      </div>
      <button className="absolute -right-10 -top-10">
        <img src="/close.png" className="w-24" />
      </button>
    </section>
  );
};
