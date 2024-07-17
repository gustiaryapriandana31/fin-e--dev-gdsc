import { GiFlour } from "react-icons/gi";
import { PiEggCrackLight } from "react-icons/pi";
import { LuMilk } from "react-icons/lu";
import { GiPotato } from "react-icons/gi";
import Flour from "../assets/flour.png";
import Potato from "../assets/potato.png";
import Milk from "../assets/milk.png";
import Egg from "../assets/egg.png";

export const IngredientsData = [
  {
    id: 1,
    // icon: "GiFlour ", // Merender komponen ikon
    name: "Tepung Terigu Kue",
    description:
      "Tepung terigu yang dipilih memiliki karakterisitik sendiri dalam membuat kue, donat, dan roti sehingga mendapatkan tekstur yang lembut, gurih, dan padat.",
    image: Flour
  },
  {
    id: 2,
    // icon: <GiPotato className="text-yellow-500" />, // Merender komponen ikon
    name: "Kentang",
    description:
      "Kentang menjadi bahan utama dalam melembutkan adonan dan memberikan tekstur tersendiri bagi donat agar tetap nikmat dimakan meski disimpan di dalam kulkas.",
    image: Potato
  },
  {
    id: 3,
    // icon: <LuMilk className="text-white" />, // Merender komponen ikon
    name: "Susu Creamer",
    description:
      "Susu Creamer ditambahkan dalam pembuatan adonan untuk memberikan rasa yang manis, creamy, dan gurih sehingga memberikan aroma khas tersendiri.",
    image: Milk
  },
  {
    id: 4,
    // icon: <PiEggCrackLight className="text-amber-800" />, // Merender komponen ikon
    name: "Telur Omega",
    description:
      "Telur Omega memiliki kandungan protein yang tinggi dan lemak yang rendah sehingga cocok digunakan dalam pembuatan donat yang bergizi dan mengenyangkan.",
    image: Egg
  },
];
