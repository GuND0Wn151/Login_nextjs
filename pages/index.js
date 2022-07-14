import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../utils/Navbar";
// const connectMongo = async () =>
//     mongoose.connect(
//       process.env.MONGO_URI,
//       { useNewUrlParser: true, useUnifiedTopology: true },
//       () => {
//         console.log("Connected to db");
//       }
// );
//const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);
export default function Home() {
  return (
    <>
    <div class=" flex flex-auto mb-10 mt-5 ml-10">
       <div class="flex basis-3/4">
       <h1 class=" text-2xl mr-4 text-blue-700">NextJsLogin</h1>
       <h1 class=" text-xl mr-4 mt-1">Home</h1>
       <h1 class="text-xl mr-4 mt-1">Courses</h1>
        </div> 
        <div>
          <h1 class="text-xl mr-4 mt-1">Contact us</h1>
        </div>
    </div>
    <div class="flex">
      <div className={styles.container} class="m-30 mt-30 ml-30">
        <div class="max-w-sm  rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_960_720.jpg"
          ></img>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Mathamatics</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #algebra
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #trignometry
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #geometry
            </span>
          </div>
        </div>
      </div>
      <div className={styles.container} class="m-30 mt-30 ml-30">
        <div class="max-w-sm  rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://cdn.pixabay.com/photo/2017/02/01/13/53/analysis-2030265_960_720.jpg"
          ></img>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Science</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #biology
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #physics
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #LifeScience
            </span>
          </div>
        </div>
      </div>
      <div className={styles.container} class="m-30 mt-300 ml-30">
        <div class="max-w-sm  rounded overflow-hidden shadow-lg">
          <img
            class="w-full"
            src="https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801__340.jpg"
          ></img>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Social Studies and History</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #History
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Commerce
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Economics
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
