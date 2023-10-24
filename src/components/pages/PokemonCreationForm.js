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
                    <label>
                        Name: <input
                            {...register("Name", { required: true })}
                            placeholder="Name"
                        />
                    </label><br/>
                    <label>
                        Weight: <input
                            {...register("Weight", { required: true })}
                            placeholder="Weight"
                        />
                    </label><br/>
                    <label>
                        Height: <input
                            {...register("Height", { required: true })}
                            placeholder="Height"
                        />        
                    </label><br/>
                    <label>
                        Description: <input
                            {...register("Description", { required: true })}
                            placeholder="Description"
                        />
                    </label><br/>
                    <label>
                        File: <input {...register("picture", {
                                required: "Recipe picture is required",
                            })}
                            type="file"
                            id="picture"
                            onChange={changeHandler} />
                    </label><br/>
                    <button type="button" onClick={handleSubmit(onSubmit)}>
                        Submit
                    </button>
                </form>

            </article>
        </section>
    )
}

export default PokemonCreationForm