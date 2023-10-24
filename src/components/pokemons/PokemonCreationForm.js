import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { saveAs } from 'file-saver';
import uuid from 'react-uuid';

const PokemonCreationForm = () => {
    const { register, handleSubmit } = useForm({ mode: "all" });
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
        setIsFilePicked(true)
	};


    const onSubmit = (data) => {
        var filename = uuid()
        data.filepath = filename+".png"
        const file = new Blob([JSON.stringify(data)], { type: 'application/json; charset=utf-8' });
        saveAs(file, 'PokeNew');   
        saveAs(selectedFile, filename+".png")
    }

    return(
        <section className="container-searchbar">
            <article className="content-searchbar">
                <h1 className="inter-bold title-search">Do you want to create a Pokemon ?</h1>
                <form onSubmit={onSubmit}>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" 
                        type="text" 
                        placeholder="Name"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="weight">
                            Weight
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="weight" 
                        type="number" 
                        placeholder="Weight"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="height">
                            Height
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="height" 
                        type="number" 
                        placeholder="Height"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                            Description
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="description" 
                        type="text" 
                        placeholder="Description"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="picture">
                            File
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="picture" 
                        type="file"
                        placeholder="File"
                        onChange={changeHandler}/>
                    </div>

                    <button type="button" onClick={handleSubmit(onSubmit)}>
                        Submit
                    </button>
                </form>

            </article>
        </section>
    )
}

export default PokemonCreationForm