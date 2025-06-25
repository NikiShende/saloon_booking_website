
// creating a hidden menu item;
function toggleDiv() {
    const secondDiv = document.getElementById('secondDiv');
    if (secondDiv.style.display === '' || secondDiv.style.display === 'none')
         {
        secondDiv.style.display = 'flex'; 
    } else {
        secondDiv.style.display = 'none'; 
    }
}




// services divs 
const services =[
    {
        service_img:"https://i0.wp.com/www.naaree.com/wp-content/uploads/2020/08/salon-services-at-home.jpg",
        service_title:"women",
        link:"./women section service card/women_ section_services.html"
    },

    {
        service_img:"https://deax38zvkau9d.cloudfront.net/prod/assets/images/uploads/services/1667550991mens-salon-at-home.webp",
        service_title:"men",
         link:"text.html"
    },

    {
        service_img:"https://w0.peakpx.com/wallpaper/369/392/HD-wallpaper-hair-salon-services-in-northwest-houston-visage-salon-day-spa-hair-treatment.jpg",
        service_title:"haircuts",
         link:"text.html"
    },

    {
        service_img:"https://media.istockphoto.com/id/825461082/photo/5-year-old-getting-a-haircut.jpg?s=612x612&w=0&k=20&c=ax37u3ZD2p7odcIyhTO82hqww5lJ8fOAUJXsUVP2Ag8=",
        service_title:"kids",
         link:"text.html"
    },

    {
        service_img:"https://florida-academy.edu/wp-content/uploads/2019/11/MassageTherapyFAQs-FloridaAcademy-1500x1000.jpeg",
        service_title:"massage",
         link:"text.html"
    },
    {
        service_img:"https://media.istockphoto.com/id/143920428/photo/young-beautiful-woman-having-various-facial-treatment.jpg?s=612x612&w=0&k=20&c=vr_1cfNwvKO7qBSiaR9IoGHrH0onFjMuKVjJYS3NsTE=",
        service_title:"facial",
         link:"text.html"
    }
 
]

let servicesDiv =document.getElementById('top_service');

services.forEach( service =>
{
    var service_type = document.createElement('div');
    service_type.className = "service-type";
    servicesDiv.appendChild(service_type);

   let service_img = document.createElement("div");
    service_img.className = "service_img";
    service_type.appendChild(service_img);

    let img = document.createElement("img");
    img.src = service.service_img;
    service_img.appendChild(img);

    let service_title = document.createElement("div");
    service_title.className = "service_title";
    service_title.innerHTML = service.service_title;
    service_type.appendChild(service_title);

    service_type.addEventListener("click", () => {
        window.location.href = services.link; 
    });

});


// top salon banners

const topSalonBanners = [
    {
        banner_img:"https://static.toiimg.com/photo/msid-103273041/103273041.jpg",
        link:"text.html"
    },

    {
        banner_img:"https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA=",
         link:"text.html"
    },

    {
        banner_img:"https://res.cloudinary.com/conferences-and-exhibitions-pvt-ltd/image/upload/v1668943139/Review/2022/November-2022/Raipur/Untitled_xibvfi.jpg",
        link:"text.html"
    },

    {
        banner_img:"https://static.startuptalky.com/2024/06/Top-Salon-Franchise-In-India-Neeldavid-International-Salon-StartupTalky.jpg",
        link:"text.html"

    },
    {
        banner_img:"https://static.startuptalky.com/2024/06/Top-Salon-Franchise-In-India-Neeldavid-International-Salon-StartupTalky.jpg",
        link:"text.html"
    },
    {
        banner_img:"https://static.startuptalky.com/2024/06/Top-Salon-Franchise-In-India-Neeldavid-International-Salon-StartupTalky.jpg",
        link:"text.html"
    },
    {
        banner_img:"https://cdn.wellnessta.com/vendors/60261b03e3bca9422cf335b3/outlet/Ntop-Family-Salon-202105141854100.webp",
        link:"text.html"
    },
    {
        banner_img:"https://cdn.wellnessta.com/vendors/60261b03e3bca9422cf335b3/outlet/Ntop-Family-Salon-202105141854100.webp",
        link:"text.html"
    },
    {
        banner_img:"https://media.istockphoto.com/id/469090778/photo/interior-of-empty-modern-hair-and-beauty-salon.jpg?s=612x612&w=0&k=20&c=pGrPWP2B83obfEA8unZrPm9oCLEuSLv3tqeK0zA4bEc=",
        link:"text.html"
    },

   
];

let card_container =document.getElementById("card_container");

topSalonBanners.forEach( banner =>
{
   
    var card = document.createElement("div");
    card.className = "card";
    card_container.appendChild(card);

    let cardimg = document.createElement("img");
    cardimg.src = banner.banner_img;
    card.appendChild(cardimg);

    card.addEventListener("click", () => {
        window.location.href = topSalonBanners.link; 
    });
});


document.getElementById("hideen-button").addEventListener("click", function() {
    const secondDiv = document.getElementById('toggleDiv1');
    secondDiv.style.display = 'none';
    const toggleDiv = document.getElementById("toggleDiv");
    // toggleDiv.classList.toggle("hidden");
    // toggleDiv.classList.toggle("visible");
    toggleDiv.style.display = 'none';
    toggleDiv.style.display = 'flex';
});

document.getElementById("close").addEventListener("click", function() {
    const secondDiv = document.getElementById('toggleDiv');
    secondDiv.style.display = 'none';
});



// login information

const userdata=[
    {
        Email:"",
        password:"",
    }
];

document.getElementById("loginbutton").addEventListener("click",function () {
    
    var Email =document.getElementById("id1").value;
    var password = document.getElementById("pass").value;
   

    let userinfo ={
        Email:Email,
        password:password
    }
    
    userdata.push(userinfo);
    alert("login successfull");
   
    console.log(userdata);
    // window.open("main.html", '_self');

     //  div.classList.toggle("hidden1");
    // var secondDiv = document.getElementById('secondDiv');
    // secondDiv.classList.toggle("hiddent");

    
    var seconddiv = document.getElementById('secondDiv');
    seconddiv.style.display = "none";

    var seconddiv1 = document.getElementById('toggleDiv');
    seconddiv1.style.display = "none";

    let anchor = document.createElement("a");
    anchor.id="hideen-button";

});


// sign up function

 var first=document.querySelector(".toggle_signup").addEventListener("click",function()
{
    const secondDiv = document.getElementById('toggleDiv');
    secondDiv.style.display = 'none';
     const div=document.getElementById("toggleDiv1");
    //  div.classList.toggle("hidden1");
    //  div.classList.toggle("visible1");
    div.style.display = 'none';
    div.style.display = 'flex';
   
});

document.getElementById("close1").addEventListener("click", function() {
    const secondDiv = document.getElementById('toggleDiv1');
    secondDiv.style.display = 'none';
});



document.getElementById('get-location').addEventListener('click', function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        document.getElementById('location').textContent = "Geolocation is not supported by this browser.";
    }
});

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //  const saurabh = document.getElementById('location');
    //  saurabh.textContent = `Latitude: ${latitude} Longitude: ${longitude}`
    // console.log(saurabh);
    console.log(latitude);
    console.log(longitude);
}

function errorCallback(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('location').textContent = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('location').textContent = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('location').textContent = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('location').textContent = "An unknown error occurred.";
            break;
    }
}



// 

const data=[
    {
        Email:"",
        password:"",
        conform_pass:"",
    }
];




document.getElementById('signup').addEventListener("click", function() {
    
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
     
    const userdata={
        Email:input1,
        password:input2,
        conform_pass:input3,
    }

    data.push(userdata);
    alert("data added")
   
    console.log(data); 
    });


// women section  sevices 

const womem_services = [
    {
        service_img:"",
        service_title:"Waxing",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://anitasaromatics.com/cdn/shop/articles/Screenshot_2023-04-30_at_10.25.15_PM.png?v=1682873766",
        service_title:"Cleanup",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://media.istockphoto.com/id/153425390/photo/woman-in-a-nail-salon-receiving-a-manicure.jpg?s=612x612&w=0&k=20&c=m72RBkODRacE4OqjK1XmiPe9X7UNDOEw8lt1gXzBvFU=",
        service_title:"Manicure",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://media.istockphoto.com/id/516981844/photo/hairdresser-washing-hair.jpg?s=612x612&w=0&k=20&c=U4DecDt3Vplgu7BVXMCeSC0cprGexeePIFMR2iZtxjo=",
        service_title:"Haircare",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://5.imimg.com/data5/OF/PP/GLADMIN-32202639/women-eyebrows-threading-service.png",
        service_title:"Threading and face washing",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://media.istockphoto.com/id/1678701754/photo/beautiful-young-woman-getting-her-hair-cut.jpg?s=612x612&w=0&k=20&c=JPn_FIkFLHTHNoaHlnmt9wBpJmt26wiMjLetoEBNYPc=",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
];

let women_services_div =document.getElementById('women-section-card');

womem_services.forEach( service =>
{
    let card_for_women = document.createElement("div");
    card_for_women.className = "card-for-women";
    women_services_div.appendChild(card_for_women);

    let upper_div = document.createElement("div");
    upper_div.className = "upper";
    card_for_women.appendChild(upper_div);

    let service_img = document.createElement("img");
    service_img.src = service.service_img;
    upper_div.appendChild(service_img);

    let lower_div = document.createElement("div");
    lower_div.className = "lower";
    card_for_women.appendChild(lower_div);

    let service_title = document.createElement("h2");
    service_title.innerHTML = service.service_title;
    lower_div.appendChild(service_title);

    let service_description = document.createElement("p");
    service_description.innerHTML = service.service_description;
    lower_div.appendChild(service_description);

    card_for_women.addEventListener("click", () => {
        window.location.href = womem_services.link; 
    });
    
}); 

// fetch('http://localhost:3000/get_women_service') // Adjust the URL if needed
//   .then(response => response.json())
//   .then(data => {
//     console.log("Women Services Response:", data); // ✅ Debug

//     const container = document.getElementById('women-section-card');
//     container.innerHTML = ''; // Clear existing content

//     if (data.services && Array.isArray(data.services)) {
//       data.services.forEach(service => {
//         console.log("Service Image URL:", service.service_img); // ✅ Debug

//         const card = document.createElement('div');
//         card.classList.add('card-for-women');

//         card.innerHTML = `
//           <div class="upper">
//             <img src="${service.service_img}" alt="${service.service_title}" />
//           </div>
//           <div class="lower">
//             <h2>${service.service_title}</h2>
//             <p>${service.service_description}</p>
//           </div>
//         `;

//         container.appendChild(card);
//       });
//     } else {
//       container.innerHTML = '<p>No services found.</p>';
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching women services:', error);
//   });


// kids section services 

const kid_services = [
    {
        service_img:"https://img.grouponcdn.com/iam/aQVURTomKSEjXZ9Cny7u/55-2048x1228/v1/t600x362.jpg",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://img.freepik.com/free-photo/kid-getting-haircut-salon-side-view_23-2149870368.jpg",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://img.freepik.com/free-photo/kid-getting-haircut-salon-side-view_23-2149870368.jpg",
        service_title:"haicut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    }
];

let kid_services_div =document.getElementById('kid-section-card');

kid_services.forEach( service_kid =>
{
    let card_for_kid = document.createElement("div");
    card_for_kid.className = "card-for-kid";
    kid_services_div.appendChild(card_for_kid);

    let upper_div = document.createElement("div");
    upper_div.className = "kid-upper";
    card_for_kid.appendChild(upper_div);

    let service_img = document.createElement("img");
    service_img.src = service_kid.service_img;
    upper_div.appendChild(service_img);

    let lower_div = document.createElement("div");
    lower_div.className = "kid-lower";
    card_for_kid.appendChild(lower_div);

    let service_title = document.createElement("h2");
    service_title.innerHTML = service_kid.service_title;
    lower_div.appendChild(service_title);

    let service_description = document.createElement("p");
    service_description.innerHTML = service_kid.service_description;
    lower_div.appendChild(service_description);

    card_for_kid.addEventListener("click", () => {
        window.location.href = womem_services.link; 
    });
    
}); 

// fetch('http://localhost:3000/getKidsServices')
//     .then(res => res.json())
//     .then(data => {
//         const kid_services_div = document.getElementById('kid-section-card');
        
//         data.services.forEach(service_kid => {
//             let card_for_kid = document.createElement("div");
//             card_for_kid.className = "card-for-kid";
//             kid_services_div.appendChild(card_for_kid);

//             let upper_div = document.createElement("div");
//             upper_div.className = "kid-upper";
//             card_for_kid.appendChild(upper_div);

//             let service_img = document.createElement("img");
//             service_img.src = service_kid.service_img || "https://via.placeholder.com/200";
//             upper_div.appendChild(service_img);

//             let lower_div = document.createElement("div");
//             lower_div.className = "kid-lower";
//             card_for_kid.appendChild(lower_div);

//             let service_title = document.createElement("h2");
//             service_title.innerHTML = service_kid.service_title;
//             lower_div.appendChild(service_title);

//             let service_description = document.createElement("p");
//             service_description.innerHTML = service_kid.service_description;
//             lower_div.appendChild(service_description);

//             card_for_kid.addEventListener("click", () => {
//                 window.location.href = service_kid.link; 
//             });
//         });
//     })
//     .catch(err => console.error('Error fetching kids services:', err));

const Men_services = [
    {
        service_img:"https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://deax38zvkau9d.cloudfront.net/prod/assets/images/uploads/services/1667550991mens-salon-at-home.webp",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://the-players-lounge.com/2018/wp-content/uploads/2022/10/The-Players-Lounge-124a.jpg",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://the-players-lounge.com/2018/wp-content/uploads/2022/10/The-Players-Lounge-124a.jpg",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://the-players-lounge.com/2018/wp-content/uploads/2022/10/The-Players-Lounge-124a.jpg",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://img.freepik.com/free-photo/man-getting-his-hair-washed-barber-shop4_23-2149186451.jpg",
        service_title:"haircut",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
];

let men_services_div =document.getElementById('men-section-card');

Men_services.forEach( service_men =>
{
    let men_services_card = document.createElement('div');
    men_services_card.className = 'car-for-men';
    men_services_div.appendChild(men_services_card);

    let upper_div = document.createElement('div');
    upper_div.className = 'men-upper';
    men_services_card.appendChild(upper_div);

    let service_img = document.createElement('img');
    service_img.src = service_men.service_img;
    upper_div.appendChild(service_img);

    let lower_div = document.createElement('div');
    lower_div.className = 'men-lower';
    men_services_card.appendChild(lower_div);

    let service_title = document.createElement('h2');
    service_title.innerHTML = service_men.service_title;
    lower_div.appendChild(service_title);

    let service_description = document.createElement('p');
    service_description.innerHTML = service_men.service_description;
    lower_div.appendChild(service_description);

    men_services_card.addEventListener('click', () => {
        window.location.href = Men_services.link; 
    });
    
});
// fetch("http://localhost:3000/menservices") // update port if needed
//     .then(res => res.json())
//     .then(data => {
//         const services = data.services;
//         const men_services_div = document.getElementById('men-section-card');

//         services.forEach(service => {
//             let men_services_card = document.createElement('div');
//             men_services_card.className = 'car-for-men';

//             let upper_div = document.createElement('div');
//             upper_div.className = 'men-upper';

//             let img = document.createElement('img');
//             img.src = service.service_img || 'fallback.png'; // optional fallback
//             upper_div.appendChild(img);

//             let lower_div = document.createElement('div');
//             lower_div.className = 'men-lower';

//             let title = document.createElement('h2');
//             title.innerText = service.service_title;

//             let desc = document.createElement('p');
//             desc.innerText = service.service_description;

//             lower_div.appendChild(title);
//             lower_div.appendChild(desc);

//             men_services_card.appendChild(upper_div);
//             men_services_card.appendChild(lower_div);

//             men_services_card.addEventListener('click', () => {
//                 window.location.href = service.link;
//             });

//             men_services_div.appendChild(men_services_card);
//         });
//     })
//     .catch(err => console.error("Error fetching men services:", err));


const massage_services = [
    {
        service_img:"https://www.shutterstock.com/image-photo/portrait-pretty-relaxed-young-woman-600nw-2478831041.jpg",
        service_title:"head massage",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://www.shutterstock.com/image-photo/beautiful-young-woman-enjoying-massage-260nw-2345594117.jpg",
        service_title:"spa massage",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://massage4you.in/wp-content/uploads/2020/02/body-massage-parlour.jpg",
        service_title:"body massage",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    },
    {
        service_img:"https://sparshspaandsalon.com/wp-content/uploads/2020/02/wellness-285590_1920.jpg",
        service_title:"facial massage",
        service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
        link:"text.html"
    }
];

let massage_services_div =document.getElementById('massage-section-card');

massage_services.forEach( service_massage =>
{
    let massage_services_card = document.createElement('div');
    massage_services_card.className ='card-for-massage';
    massage_services_div.appendChild(massage_services_card);

    let upper_div = document.createElement('div');
    upper_div.className ='massage-upper';
    massage_services_card.appendChild(upper_div);

    let service_img = document.createElement('img');
    service_img.src = service_massage.service_img;
    upper_div.appendChild(service_img);

    let lower_div = document.createElement('div');
    lower_div.className ='massage-lower';
    massage_services_card.appendChild(lower_div);

    let service_title = document.createElement('h2');
    service_title.innerHTML = service_massage.service_title;
    lower_div.appendChild(service_title);

    let service_description = document.createElement('p');
    service_description.innerHTML = service_massage.service_description;
    lower_div.appendChild(service_description);

    massage_services_card.addEventListener('click', () => {
        window.location.href = massage_services.link; 
    });
});

// fetch('http://localhost:3000/getMassageServices')  // Update port if different
//     .then(response => response.json())
//     .then(data => {
//         const massage_services_div = document.getElementById('massage-section-card');

//         data.services.forEach(service => {
//             let massage_services_card = document.createElement('div');
//             massage_services_card.className = 'card-for-massage';
//             massage_services_div.appendChild(massage_services_card);

//             let upper_div = document.createElement('div');
//             upper_div.className = 'massage-upper';
//             massage_services_card.appendChild(upper_div);

//             let service_img = document.createElement('img');
//             service_img.src = service.service_img;
//             upper_div.appendChild(service_img);

//             let lower_div = document.createElement('div');
//             lower_div.className = 'massage-lower';
//             massage_services_card.appendChild(lower_div);

//             let service_title = document.createElement('h2');
//             service_title.innerHTML = service.service_title;
//             lower_div.appendChild(service_title);

//             let service_description = document.createElement('p');
//             service_description.innerHTML = service.service_description;
//             lower_div.appendChild(service_description);

//             massage_services_card.addEventListener('click', () => {
//                 window.location.href = service.link;
//             });
//         });
//     })
//     .catch(error => {
//         console.error("Error fetching massage services:", error);
//     });


var location2 = document.getElementById('userloc');
    location2.style.display = "none";
var userinput = document.getElementById('input_location').addEventListener("click", function()
{
    
    var location1 = document.getElementById('userloc');
    location1.style.filter="contrast(100%)";
    location1.style.display = "none";
    location1.style.display = "flex"; 

    var body = document.getElementById('body');
    // body.style.filter ="brightness(0.5)";

    var closediv= document.querySelector('.location_close');
    closediv.addEventListener("click",function (){
        location1.style.display = "none";
        body.style.filter ="none";
    });
});

