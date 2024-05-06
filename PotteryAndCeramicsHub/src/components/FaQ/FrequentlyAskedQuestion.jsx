const FrequentlyAskedQuestion = () => {
  return (
    <section className=" flex gap-5 flex-col-reverse lg:flex-row">
       
      <div className="container flex flex-col justify-center px-4 pt-0 mx-auto md:p-8 w-full lg:w-[60%]">
      <h2 className="text-2xl text-center font-semibold sm:text-4xl my-7 hidden lg:block">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400  font-bold text-lg">
            What products do you offer on your website?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 pl-10 ">
            We offer a wide range of pottery and ceramics products including handmade pottery, ceramic sculptures, dinnerware sets, vases, and more.
 
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400  font-bold text-lg">
            Do you feature pieces from specific artists or do you have a variety of creators?
            </summary>
            <p className="px-4 py-6 pl-10 pt-0 ml-4 -mt-4  ">
            We feature pieces from a diverse range of artists and creators, each with their unique style and craftsmanship.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400  font-bold text-lg">
            Are your products safe for everyday use, such as in the dishwasher and microwave?
            </summary>
            <p className="px-4 py-6 pl-10 pt-0 ml-4 -mt-4  ">
            Many of our products are designed to be functional and safe for everyday use. However, we recommend checking the product descriptions for specific care instructions.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400  font-bold text-lg">
            Do you have a return policy?
            </summary>
            <p className="px-4 py-6 pl-10 pt-0 ml-4 -mt-4  ">
            Yes, we have a return policy that allows you to return eligible items within a certain timeframe for a refund or exchange. Please refer to our return policy for more details.
            </p>
          </details>
      
        </div>
      </div>
      <div className="w-[60%] mx-auto lg:w-[40%] h-[300px] lg:h-full">
     <img src="https://plus.unsplash.com/premium_photo-1678000616499-2f27d9bc0c78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEZhcXxlbnwwfHwwfHx8MA%3D%3D" className=" w-full h-full" alt="" />
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestion;
