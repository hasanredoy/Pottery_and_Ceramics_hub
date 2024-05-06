import { useContext } from "react";
import FrequentlyAskedQuestion from "../../components/FaQ/FrequentlyAskedQuestion";
import ArtAndCraft from "../../components/artAndCraftCategory/ArtAndCraft";
import Banner from "../../components/banner/Banner";
import CraftItems from "../../components/craftItems/CraftItems";
import Review from "../../components/reviews/Review";
import { AuthContext } from "../../components/authProvider/AuthProvider";

const Home = () => {
  const {loading}=useContext(AuthContext)
  return (
    <div className=" my-10">
      {/* banner section  */}
     
      <section>
        <Banner></Banner>
      </section>

      {/* craft items section */}
      {
        loading&&<span className="loading loading-bars loading-lg text-center h-screen flex justify-center items-center mx-auto"></span>
      }
      <section id="craft" className=" my-28">
        <CraftItems></CraftItems>
      </section>

      {/* art and craft category section  */}
      {
        loading&&<span className="loading loading-bars loading-lg text-center h-screen flex justify-center items-center mx-auto"></span>
      }
      <section className=" my-20 bg-white">
        <h1 className=" text-3xl font-bold text-center my-4">Art And Crafts Categorys </h1>
        <ArtAndCraft></ArtAndCraft>
      </section>
      {/* FrequentlyAskedQuestion section  */}
      <section id="faq" className=" bg-gray-100">
        <h2 className="text-2xl text-center font-semibold sm:text-4xl my-7 block lg:hidden">
          Frequently Asked Questions
        </h2>
        <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
      </section>
      {/*review section  */}
      {
        loading&&<span className="loading loading-bars loading-lg text-center h-screen flex justify-center items-center mx-auto"></span>
      }
      <section id="review" className=" my-24 bg-base-100 rounded-md  ">
        <Review></Review>
      </section>
    </div>
  );
};

export default Home;
