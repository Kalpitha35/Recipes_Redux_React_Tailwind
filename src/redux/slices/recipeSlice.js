import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllRecipes = createAsyncThunk('recipes/fetchAllRecipes', async ()=>{
   const result = await axios.get("https://dummyjson.com/recipes")

 // session storage
 sessionStorage.setItem("allRecipes",JSON.stringify(result.data.recipes))
    
   //    console.log(result);
   return result.data.recipes
})

const recipeSlice = createSlice({
    name:'recipes',
    initialState:{
        allRecipes:[],
        dummyAllProducts:[],
        loading:false,
        error:""
    },
    reducers:{
        // synchronous actions
        searchRecipe:(state,searchKeyFromHeader)=>{

           state.allRecipes =  state.dummyAllProducts.filter(item=>item.cuisine.toLowerCase().includes(searchKeyFromHeader.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllRecipes.fulfilled,(state,apiResult)=>{
            state.allRecipes = apiResult.payload
            state.dummyAllProducts = apiResult.payload
            state.loading = false
            state.error = ""
        })
        builder.addCase(fetchAllRecipes.pending,(state,apiResult)=>{
            state.allRecipes = []
            state.dummyAllProducts = []
            state.loading = true
            state.error = ""
        })
        builder.addCase(fetchAllRecipes.rejected,(state,apiResult)=>{
            state.allRecipes = []
            state.dummyAllProducts = []
            state.loading = false
            state.error = "API Call Failed!!! "
        })

    }
})

export const {searchRecipe} = recipeSlice.actions

export default recipeSlice.reducer
