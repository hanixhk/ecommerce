import Stripe from "stripe"
import { NextRequest, NextResponse } from "next/server";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
 interface typeOfData {
    price: string,
    name: string,
    quantity: number,
}

 let orignalData: Array<typeOfData> = [
        {
            price: 'price_1Nr3WwBP3qyxnuZ6xUVbV6xd',
            name: 'flex SweatShirt',
            quantity: 1,
        },
        {
            price: 'price_1NqOE4BP3qyxnuZ6RE5g0iHv',
            name: 'Muscle Tank',
            quantity: 1,
        },
        {
            price: 'price_1NqOBPBP3qyxnuZ6Xyv7JTqC',
            name: 'Brushed Bomber',
            quantity: 1,
        },
        {
            price: 'price_1NqO8uBP3qyxnuZ6Fa6hHpzj',
            name: 'Brushed Raglan Sweatshirt',
            quantity: 1,
        },
        {
            price: 'price_1NqOAqBP3qyxnuZ6aN1MatGz',
            name: 'Cameryn Sash Tie Dress',
            quantity: 1,
        },
        {
            price: 'price_1NqO6NBP3qyxnuZ6yPkv0lx9',
            name: 'Pink Fleece SweatPants',
            quantity: 1,
        },
        {
            price: 'price_1NqNygBP3qyxnuZ6vRjjOko6',
            name: 'Kids One',
            quantity: 1,
        },
        {
            price: 'price_1NqOCIBP3qyxnuZ6FqEmBxoU',
            name: 'Imperial Alpaca Hoodie',
            quantity: 1,
        },
        {
            price: 'price_1NqO0cBP3qyxnuZ6BSN5jykC',
            name: 'Flex Sweatpants',
            quantity: 1,
        },
        {
            price: 'price_1NqNxWBP3qyxnuZ6TJaCDmu2',
            name: 'Lite Sweatpants',
            quantity: 1,
        },
        {
            price: 'price_1NqNw2BP3qyxnuZ6vCz8ITwe',
            name: 'Raglan Sweatshirt',
            quantity: 1,
        },
        {
            price: 'price_1NqO4yBP3qyxnuZ6evoxxRBH',
            name: 'Flex Push Button Bomber',
            quantity: 1,
        },
    ]
  
// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
    let cartItemsArray = await req.json();

    try {
        let line_item = orignalData.filter((item: typeOfData) => {
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element: oneProductType = cartItemsArray[index];
                if (element.productName === item.name) {
                    return true
                }
            }
        })
        let line_itemToSend: any = line_item.map((item: typeOfData) => {
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element: oneProductType = cartItemsArray[index];
                if (element.productName === item.name) {
                    return {
                        price: item.price,
                        quantity: element.quantity
                    }
                }
            }
        })

        let session = await stripe.checkout.sessions.create({
            line_items: line_itemToSend,
            mode: "payment",
            success_url: `${req.nextUrl.origin}/?success=true`,
            cancel_url: `${req.nextUrl.origin}/?success=false`
        })
        return NextResponse.json({ link: session.url });
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json({ error })
    }

}
