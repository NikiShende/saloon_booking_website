const imagesWomenName = [
    {
        images: [
            "https://sparshspaandsalon.com/wp-content/uploads/2020/02/wellness-285590_1920.jpg",
            "https://media.istockphoto.com/id/516981844/photo/hairdresser-washing-hair.jpg?s=612x612&w=0&k=20&c=U4DecDt3Vplgu7BVXMCeSC0cprGexeePIFMR2iZtxjo=",
            "https://5.imimg.com/data5/OF/PP/GLADMIN-32202639/women-eyebrows-threading-service.png"
        ],
        names: ["Name 1", "Name 1.1", "Name 1.2"]
    },
    {
        images: [
            "https://media.istockphoto.com/id/1678701754/photo/beautiful-young-woman-getting-her-hair-cut.jpg?s=612x612&w=0&k=20&c=JPn_FIkFLHTHNoaHlnmt9wBpJmt26wiMjLetoEBNYPc=",
            "https://sparshspaandsalon.com/wp-content/uploads/2020/02/wellness-285590_1920.jpg",
            "https://via.placeholder.com/200x150?text=Image+2.2https://media.istockphoto.com/id/516981844/photo/hairdresser-washing-hair.jpg?s=612x612&w=0&k=20&c=U4DecDt3Vplgu7BVXMCeSC0cprGexeePIFMR2iZtxjo="
        ],
        names: ["Name 2", "Name 2.1", "Name 2.2"]
    },
    {
        images: [
            "https://sparshspaandsalon.com/wp-content/uploads/2020/02/wellness-285590_1920.jpg",
            "https://via.placeholder.com/200x150?text=Image+3.1",
            "https://media.istockphoto.com/id/516981844/photo/hairdresser-washing-hair.jpg?s=612x612&w=0&k=20&c=U4DecDt3Vplgu7BVXMCeSC0cprGexeePIFMR2iZtxjo="
        ],
        names: ["Name 3", "Name 3.1", "Name 3.2"]
    },
    {
        images: [
            "https://w0.peakpx.com/wallpaper/369/392/HD-wallpaper-hair-salon-services-in-northwest-houston-visage-salon-day-spa-hair-treatment.jpg",
            "https://via.placeholder.com/200x150?text=Image+1.1",
            "https://via.placeholder.com/200x150?text=Image+1.2"
        ],
        names: ["Name 4", "Name 4.1", "Name 4.2"]
    },
    {
        images: [
            "https://media.istockphoto.com/id/1678701754/photo/beautiful-young-woman-getting-her-hair-cut.jpg?s=612x612&w=0&k=20&c=JPn_FIkFLHTHNoaHlnmt9wBpJmt26wiMjLetoEBNYPc=",
            "https://img.freepik.com/premium-photo/female-client-receiving-haircut-beauty-salon-young-woman-enjoying-getting-new-hairstyle_141172-7333.jpg",
            "https://5.imimg.com/data5/OF/PP/GLADMIN-32202639/women-eyebrows-threading-service.png"
        ],
        names: ["Name 5", "Name 5.1", "Name 5.2"]
    },
    {
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHJPxrmPnzYn-vEi_RLHFIEpE9OzW8OKGjg&s",
            "https://via.placeholder.com/200x150?text=Image+3.1",
            "https://via.placeholder.com/200x150?text=Image+3.2"
        ],
        names: ["Name 6", "Name 6.1", "Name 6.2"]
    },
    {
        images: [
            "https://w0.peakpx.com/wallpaper/369/392/HD-wallpaper-hair-salon-services-in-northwest-houston-visage-salon-day-spa-hair-treatment.jpg",
            "https://st2.depositphotos.com/1006542/43496/i/450/depositphotos_434966258-stock-photo-smiling-female-customer-cup-coffee.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHJPxrmPnzYn-vEi_RLHFIEpE9OzW8OKGjg&s"
        ],
        names: ["Name 1", "Name 1.1", "Name 1.2"]
    },
    {
        images: [
            "https://www.shutterstock.com/image-photo/woman-professional-hairdresser-doing-hair-260nw-2464676201.jpg",
            "https://via.placeholder.com/200x150?text=Image+2.1",
            "https://st2.depositphotos.com/1006542/43496/i/450/depositphotos_434966258-stock-photo-smiling-female-customer-cup-coffee.jpg"
        ],
        names: ["Name 2", "Name 2.1", "Name 2.2"]
    },
    {
        images: [
            "https://www.shutterstock.com/image-photo/woman-professional-hairdresser-doing-hair-260nw-2464676201.jpg",
            "https://w0.peakpx.com/wallpaper/369/392/HD-wallpaper-hair-salon-services-in-northwest-houston-visage-salon-day-spa-hair-treatment.jpg",
            "https://www.shutterstock.com/image-photo/hairstylist-trimming-customer39s-hair-beauty-600nw-2065702454.jpg"
        ],
        names: ["Name 3", "Name 3.1", "Name 3.2"]
    }
];

const currentIndexes = [0,0,0,0,0,0,0,0,0];
function updateImagesAndNames() {
    const imageContainers = document.querySelectorAll(".imageContainer");

    
    imageContainers.forEach((container, index) => {
        const img = container.querySelector(".dynamicImage");
        const caption = container.querySelector(".imgstylename");

        
        img.src = imagesWomenName[index].images[currentIndexes[index]];
        caption.textContent = imagesWomenName[index].names[currentIndexes[index]];

    
        currentIndexes[index] = (currentIndexes[index] + 1) % imagesWomenName[index].images.length;
    });
}
setInterval(updateImagesAndNames, 2000);




var arrayServiceWomen = [
    {
        cardname: "Hair spa and style",
        price: "Rs899",
        duration: "60 min",
        discription: "description",
        Servicesimg: "https://www.shutterstock.com/image-photo/woman-professional-hairdresser-doing-hair-260nw-2464676201.jpg"
    },
    {
        cardname: "Head massage",
        price: "Rs299",
        duration: "30 min",
        discription: "description",
        Servicesimg: "https://media.istockphoto.com/id/469653439/photo/wellness-spa-with-woman-getting-head-massage.jpg?s=612x612&w=0&k=20&c=R2lcmYn2VdFFzyn6attj_ELrPddLD6199V-kL4RnLtQ="
    },
    {
        cardname: "Hair cut",
        price: "Rs199",
        duration: "30 min",
        discription: "description",
        Servicesimg: "https://media.istockphoto.com/id/469653439/photo/wellness-spa-with-woman-getting-head-massage.jpg?s=612x612&w=0&k=20&c=R2lcmYn2VdFFzyn6attj_ELrPddLD6199V-kL4RnLtQ="
    },
    {
        cardname: "Hair colors",
        price: "Rs899",
        duration: "50 min",
        discription: "description",
        Servicesimg: "https://media.istockphoto.com/id/469653439/photo/wellness-spa-with-woman-getting-head-massage.jpg?s=612x612&w=0&k=20&c=R2lcmYn2VdFFzyn6attj_ELrPddLD6199V-kL4RnLtQ="
    },
    {
        cardname: "Hair treatment",
        price: "Rs999",
        duration: "60min",
        discription: "description",
        Servicesimg: "https://media.istockphoto.com/id/469653439/photo/wellness-spa-with-woman-getting-head-massage.jpg?s=612x612&w=0&k=20&c=R2lcmYn2VdFFzyn6attj_ELrPddLD6199V-kL4RnLtQ="
    },
    {
        cardname: "clean hup",
        price: "Rs399",
        duration: "20 min",
        discription: "description",
        Servicesimg: "https://media.istockphoto.com/id/469653439/photo/wellness-spa-with-woman-getting-head-massage.jpg?s=612x612&w=0&k=20&c=R2lcmYn2VdFFzyn6attj_ELrPddLD6199V-kL4RnLtQ="
    },
    {
        cardname: "facial",
        price: "Rs499",
        duration: "25 min",
        discription: "description",
        Servicesimg: "https://media.istockphoto.com/id/469653439/photo/wellness-spa-with-woman-getting-head-massage.jpg?s=612x612&w=0&k=20&c=R2lcmYn2VdFFzyn6attj_ELrPddLD6199V-kL4RnLtQ="
    },
    
];

const productitem =[

];


let result = document.getElementById("card-container");
let cart = document.getElementById('id');
console.log("saurabh");

arrayServiceWomen.forEach(arr => {

  
    const service_card = document.createElement("div");
    service_card.className ="service-card"
    result.appendChild(service_card);

    

    var left_container = document.createElement("div");
    left_container.className ="left-container";
    service_card.appendChild(left_container);

    var h3 = document.createElement("h3");
    h3.textContent =arr.cardname;
    left_container.appendChild(h3);

    var p = document.createElement("p");
    p.innerHTML = arr.price ;
    left_container.appendChild(p);

    var h4 = document.createElement("h4");
    h4.textContent =arr.duration ;
    left_container.appendChild(h4);

    var h5 = document.createElement("h5");
    h5.textContent =arr.discription ;
    left_container.appendChild(h5);

    var right_container = document.createElement("div");
    right_container.className ="right-container";
    service_card.appendChild(right_container);

    var img = document.createElement("img");
    img.src = arr.Servicesimg;
    right_container.appendChild(img);

    
    var button = document.createElement("button");
    button.textContent = "Book Now";
    button.id="book_button";
    service_card.appendChild(button);
    button.addEventListener("click", () => book(button)); 
     
});

function book(button) {
    const card = button.parentElement; // Get the parent element of the button
    const cardClone = card.cloneNode(true); // Clone the card

    // Remove the button from the cloned card
    const transferButton = cardClone.querySelector('button'); // Get the button in the cloned card
    if (transferButton) {
        transferButton.remove();
    }

    cardClone.classList.add('small-card'); // Add a class to the cloned card

    document.querySelector('.items').appendChild(cardClone); // Append the cloned card to the items container

    // Hide the items
    var items1 = document.getElementById("items1");
    items1.style.display = "none";

    var items2 = document.getElementById("items2");
    items2.style.display = "none";
}



    const itemsDiv = document.getElementById('items');
    const itemsText = document.getElementById('items2');
    const homeDiv = document.getElementById('home');
    // Hide "No items in your cart" message if there are items
    if (itemsText) {
    //     // itemsText.style.display = 'none';
    }

    // Create a new item and append it
    const newItem = document.createElement('div');
    newItem.className = 'item';
    // newItem.textContent = 'Not Book any item'    // Replace with item details as needed
    itemsDiv.appendChild(newItem);

    // Adjust the size of the container dynamically
    itemsDiv.style.height = 'auto'; // Ensures it expands naturally
    homeDiv.style.height = 'auto';
