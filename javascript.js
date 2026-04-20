console.log("conectado correctamente");

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



document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.getElementById("overlay");
  const imgAmpliada = document.getElementById("img-ampliada");

  const images = document.querySelectorAll(".galeria-horizontal img");

  let scale = 1;
  let posX = 0;
  let posY = 0;
  let isDragging = false;
  let startX, startY;

  images.forEach(img => {
    img.addEventListener("click", () => {
      imgAmpliada.src = img.src;
      overlay.classList.add("active");

      scale = 1;
      posX = 0;
      posY = 0;
      updateTransform();
    });
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });

  overlay.addEventListener("wheel", (e) => {
    e.preventDefault();

    const zoomSpeed = 0.1;

    if (e.deltaY < 0) {
      scale += zoomSpeed;
    } else {
      scale -= zoomSpeed;
    }

    scale = Math.max(1, Math.min(scale, 4));
    updateTransform();
  });

  imgAmpliada.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    posX = e.clientX - startX;
    posY = e.clientY - startY;

    updateTransform();
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  imgAmpliada.addEventListener("dblclick", () => {
    scale = 1;
    posX = 0;
    posY = 0;
    updateTransform();
  });

  function updateTransform() {
    imgAmpliada.style.transform =
      `translate(${posX}px, ${posY}px) scale(${scale})`;
  }

});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// fade OUT al cambiar de página
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {

    const href = this.getAttribute("href");

    // evitar enlaces externos o anclas
    if (href.startsWith("#") || href.startsWith("http")) return;

    e.preventDefault();

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = href;
    }, 400); // mismo tiempo que el CSS
  });
});


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


(() => {
  const gallery = document.querySelector('.gallery');
  const track = document.querySelector('.gallery-track');
  const items = document.querySelectorAll('.gallery-item');

  let index = 0;

  gallery.addEventListener('click', () => {
    index = (index + 1) % items.length;
    const width = gallery.clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  });
})();
  