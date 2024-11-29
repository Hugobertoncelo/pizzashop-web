import { api } from "@/lib/axios"

export interface RegisterRestaurantBody {
    restauranteName: string
    managerName: string
    email: string
    phone: string
}

export async function registerRestaurant({ 
    restauranteName,
    managerName,
    email,
    phone,
}: RegisterRestaurantBody) {
    await api.post('/restaurants', { 
        restauranteName,
        managerName,
        email,
        phone,
    })
}
