console.log("conectado correctamente");
console.log("JS cargado");

let months=["april","march","june"];
console.log(months[0]); // Output: april
console.log(months[1]); // Output: march
console.log(months[2]); // Output: june        

months.push("july");
console.log(months); // Output: ["april", "march", "june", "july"]      
months.pop();
console.log(months);
// Output: ["april", "march", "june"]

let person = {
    firstName: "Marlene",
    lastName: "Hovenbitzer",
    age: 22,
    hobbies: ["smoking", "drawing", "cycling"],
    address: {
        street: "Coppiestraße No: 47",
        city: "Hamburg",
        country: "Germany"
        }
};

person.hobbies.push("not cooking");
console.log(person.firstName); // Output: Marlene
console.log(person.lastName); // Output: Hovenbitzer
console.log(person.age); // Output: 22
console.log(person.hobbies); // Output: ["smoking", "drawing", "cycling", "not cooking"]
console.log(person.address.street); // Output: Coppiestraße No: 47
console.log(person.address.city); // Output: Hamburg
console.log(person.address.country); // Output: Germany

document.addEventListener("click", (e) => {
  console.log("click");
});


for (let i = 0; i < months.length; i++) {
    console.log(months[i]);
}

let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than or equal to 5");
}

let hour=18;
if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}


let age = 25;
if (age >= 18) {
    if (age < 21) {
        console.log("You are an adult, but not old enough to drink.");
    } else {
        console.log("You are an adult and old enough to drink.");
    }
} else {
    console.log("You are a minor.");
}       

let day = "Monday";
if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
    if (day === "Monday") {
        console.log("I'm sad");
    } else {
        console.log("It's a little better");
    }
} else  {
    console.log("It's the weekend!!!!.");
}

function e() {
    let y = "hello";
    console.log(y);
}   

e();

function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Marlene"); // Output: Hello, Marlene!

const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8

let baseprice = 50;
let discount = 0.2;
let finalPrice = baseprice - (baseprice * discount);
console.log(finalPrice); // Output: 40

const multiply = (a, b) => a * b;
console.log(multiply(4, 6)); // Output: 24

let elementsbyclass = document.getElementsByClassName("my-class");
let elementbyid = document.getElementById("my-id");
let elementsbytag = document.getElementsByTagName("p");
let elementbyquery = document.querySelector(".my-class");






const imagenes = [
    "images/planta abajo san cristo.jpg",
    "images/planta arriba san cristo.jpg",
    
  ];

  let index = 0;

  function cambiarImagen() {
    index++;
    if (index >= imagenes.length) index = 0;

    document.getElementById("imagen-proyecto").src = imagenes[index];
  }


  const images = document.querySelectorAll(".galeria-scroll img");

  images.forEach((img, index) => {
    img.addEventListener("click", () => {

      // si no es la última imagen
      if (index < images.length - 1) {
        images[index + 1].scrollIntoView({
          behavior: "smooth"
        });
      }

      if (index === images.length - 1) {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

    });
  });




  

const textos = document.querySelectorAll('.textoinicio, .texto2, .textoinicial');

let timer;

window.addEventListener('scroll', () => {

    clearTimeout(timer);

    timer = setTimeout(() => {

        let closest = textos[0];
        let minDistance = Infinity;

        textos.forEach(texto => {

            const distance = Math.abs(
                texto.getBoundingClientRect().top
            );

            if(distance < minDistance){
                minDistance = distance;
                closest = texto;
            }

        });

        closest.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }, 150);

});


document.addEventListener("click", (e) => {

  const item = e.target.closest(".item");
  if (!item) return;

  e.preventDefault();

  const link = item.getAttribute("href");

  // usamos la imagen visible
  const img = item.querySelector(".img-base");

  if (!img) return;

  const rect = img.getBoundingClientRect();

  // fondo para ocultar la página
  const bg = document.createElement("div");

  Object.assign(bg.style, {
    position: "fixed",
    inset: "0",
    background: "#f5f5f5",
    opacity: "0",
    zIndex: "99998",
    transition: "opacity 0.8s ease"
  });

  document.body.appendChild(bg);

  // clon de la imagen
  const clone = img.cloneNode(true);

  Object.assign(clone.style, {
    position: "fixed",
    top: rect.top + "px",
    left: rect.left + "px",
    width: rect.width + "px",
    height: rect.height + "px",
    objectFit: "cover",
    zIndex: "99999",
    transformOrigin: "center center",
    transition:
      "top 1.4s cubic-bezier(0.16,1,0.3,1), " +
      "left 1.4s cubic-bezier(0.16,1,0.3,1), " +
      "width 1.4s cubic-bezier(0.16,1,0.3,1), " +
      "height 1.4s cubic-bezier(0.16,1,0.3,1), " +
      "transform 0.8s ease"
  });

  document.body.appendChild(clone);

  // ocultar contenido
  document.querySelector(".grid")?.classList.add("fade-out");
  document.querySelector("h1")?.classList.add("fade-out");

  requestAnimationFrame(() => {

    bg.style.opacity = "1";

    clone.style.top = "0";
    clone.style.left = "0";
    clone.style.width = "100vw";
    clone.style.height = "100vh";

  });

  // pequeño zoom extra cuando ya ocupa la pantalla
  setTimeout(() => {

    clone.style.transform = "scale(1.05)";

  }, 1400);

  // cambiar de página
  setTimeout(() => {

    window.location.href = link;

  }, 2200);

});


const sections = document.querySelectorAll(".snap-section, .snap-point");

let current = 0;
let scrolling = false;

window.addEventListener("wheel", (e) => {

  if (scrolling) return;

  if (e.deltaY > 0) {
    current = Math.min(current + 1, sections.length - 1);
  } else {
    current = Math.max(current - 1, 0);
  }

  scrolling = true;

  sections[current].scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  setTimeout(() => {
    scrolling = false;
  }, 800);

});


(() => {

  const gallery = document.getElementById("gallery");
  const track = document.getElementById("galleryTrack");

  if (!gallery || !track) return;

  let galleryCurrent = 0;

  gallery.addEventListener("click", () => {

    const totalSlides =
      track.querySelectorAll("img").length;

    galleryCurrent =
      (galleryCurrent + 1) % totalSlides;

    track.style.transform =
      `translateX(-${galleryCurrent * 100}%)`;

  });

})();