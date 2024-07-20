import { IngredientsData } from "../../staticData/IngredientsData";

const Ingredients = () => {
    return(
        <section>
            <div className="bg-white/95 h-screen py-10 md:px-5">
                <h1 className="text-center text-3xl text-orange-400 font-bold font-poppins mb-6">Komposisi Bahan Premium</h1>
                <section className="grid grid-cols-2 md:gap-6 gap-3 mx-auto md:p-6 p-3 rounded-lg">
                    {IngredientsData.map((ingredient) => (
                        <CardIngredient key={ingredient.id} name={ingredient.name} description={ingredient.description} image={ingredient.image}/>
                    ))}
                </section>
            </div>
        </section>
    )
}

const CardIngredient = ({key, name, description, image}) => {
    return(
        <div key={key} className="bg-white/70 shadow-xl shadow-slate-300 p-3 md:grid md:grid-cols-2 md:items-center rounded-lg">
            <img src={image} alt={name} className="mx-auto inline-block md:w-3/4 md:h-3/4 w-full h-1/4 bg-amber-200 rounded-tr-full rounded-tl-full"/>
            <div className="p-2">
                <h2 className="mb-3 md:text-xl text-sm font-bold text-center text-orange-600 font-roboto">{name}</h2>
                <p className="md:text-base text-xs md:text-start text-center text-slate-800 font-semibold">{description}</p>
            </div>
        </div>
    )
}

export default Ingredients;