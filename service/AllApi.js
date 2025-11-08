import { details } from "framer-motion/client"
import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"




// user side
// register api
export const registerApi = async (reqBody)=>{
    return commonApi("POST",`${serverUrl}/register`,reqBody)
}

// login api 
export const loginApi = async (reqBody)=>{
    return commonApi("POST",`${serverUrl}/login`,reqBody)
}


// admin api

// add pet api
export const AddPetApi = async (reqBody)=>{
    return commonApi("POST",`${serverUrl}/add-pet`,reqBody)
}
// get pet in admin
export const getPetApi = async ()=>{
    return commonApi("GET",`${serverUrl}/getAdminPet`)

}

export const dashBoardGetPetApi = async()=>{
    return commonApi("get",`${serverUrl}/getPet`)
}

// delete pet 
export const deletepetApi = async (id)=>{
    return commonApi("DELETE",`${serverUrl}/deletepet/${id}`)
}


// get all limited users request api
export const adminAllUsersApi = async ()=>{
    return commonApi ("get",`${serverUrl}/getAllUsers`)
}


//  get all  users request api
export const AllUsersRequestsApi = async ()=>{
    return commonApi ("get",`${serverUrl}/allUsersReq`)
}
// get specific pet details
export const getSpecificPetDetailApi = async (id)=>{
    return commonApi ("get",`${serverUrl}/editPet/${id}`)
}
//  update pet details api
export const updatePetDetailsApi = async(reqBody)=>{
    return commonApi ("put",`${serverUrl}/update`,reqBody)

}
// upadte status api
export const updateStatusApi = async(id)=>{
    return commonApi ("put",`${serverUrl}/approve/${id}`)

}

export const updateStatusRejectApi = async(id,reqBody)=>{
    return commonApi ("put",`${serverUrl}/reject/${id}`,reqBody)

}
// admin login
export const loginAdminApi = async (reqBody)=>{
    return commonApi("POST",`${serverUrl}/adminLogin`,reqBody)
}



// user api
// get home api
export const getHomePetApi = async ()=>{
    return commonApi("GET",`${serverUrl}/getHomePet`,)
}
// get all pets
export const getAllPetApi = async (reqHeader,searchKey)=>{
    return commonApi("GET",`${serverUrl}/allPets?search=${searchKey}`,"",reqHeader)
}
// get a specifiv pet
export const getAPetApi = async (id)=>{
    return commonApi("GET",`${serverUrl}/petdetails/${id}`,)
}
export const getAPetAdoptApi = async (id)=>{
    return commonApi("GET",`${serverUrl}/adoptionform/${id}`,)

}

// adoption form
export const adoptionformApi = async (reqBody,reqHeader)=>{
    return commonApi("POST",`${serverUrl}/adoptform`,reqBody,reqHeader)
}
// update status api
export const updatePetApi = async (reqBody,reqHeader)=>{
    return commonApi("put",`${serverUrl}/status-update`,reqBody,reqHeader)
}
// get user requests
export const getUserRequestApi = async (reqHeader)=>{
    return commonApi("get",`${serverUrl}/getRequests`,"",reqHeader)
}
// get profile user
export const getProfileUserRequestApi = async (reqHeader)=>{
    return commonApi("get",`${serverUrl}/profileForm`,"",reqHeader)
}
