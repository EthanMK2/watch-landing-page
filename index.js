/////////////////////////////// header logic
window.onscroll = function () {
  headerScroll();
};

const header_el = document.getElementById("header-el");
let last_scroll_pixels = document.documentElement.scrollTop;

function headerScroll() {
  if (
    last_scroll_pixels < document.body.scrollTop ||
    last_scroll_pixels < document.documentElement.scrollTop
  ) {
    // keep or move the header up out of view
    header_el.style.top = `-13%`;
    console.log("scrolled down");
    last_scroll_pixels = document.documentElement.scrollTop;
  } else if (
    last_scroll_pixels > document.body.scrollTop ||
    last_scroll_pixels > document.documentElement.scrollTop
  ) {
    // move header back into view
    header_el.style.top = `0`;
    console.log("scrolled up");
    last_scroll_pixels = document.documentElement.scrollTop;
  }
}

////////////////////////////////// mobile menu logic

const mobile_menu_button = document.getElementById("mobile-menu-btn");
const mobile_menu_close_button = document.getElementById("mobile-menu-close-btn");
const mobile_menu = document.getElementById("mobile-menu");

mobile_menu_button.addEventListener("click", () => {
  mobile_menu.style.right = "0";
})

mobile_menu_close_button.addEventListener("click", () => {
  mobile_menu.style.right = "100%";
})

////////////////////////////////// carousel logic
const left_button = document.getElementById("trending-left-button");
const right_button = document.getElementById("trending-right-button");

const trending_list = document.getElementsByClassName("trending-watch");

const num_desktop_displayed = 3;

let scroll_position = 0;
let last_direction = null;

const trending = document.getElementById("trending-list");

left_button.addEventListener("click", () => {
  if (scroll_position === 1) {
    trending.style.transform = `translateX(0)`;
    scroll_position = 0;
  } else if (scroll_position > 1) {
    if (last_direction === "right") {
      scroll_position -= 1;
      trending.style.transform = `translateX(calc(-${23.5 * scroll_position}vw))`;
      last_direction = "left";
    } else {
      scroll_position -= 1;
      trending.style.transform = `translateX(calc(-${23.5 * scroll_position}vw))`;
      last_direction = "left";
    }
  }
  // the problem with this solution is it will scroll vertically as well, which is not necessarily needed
  //   if (scroll_position === 0) {
  //     return;
  //   } else if (scroll_position > 0) {
  //     if (last_direction === "right") {
  //       scroll_position -= num_desktop_displayed;
  //       trending_list[scroll_position].scrollIntoView({ behavior: "smooth" });
  //       last_direction = "left";
  //     } else {
  //       scroll_position -= 1;
  //       trending_list[scroll_position].scrollIntoView({ behavior: "smooth" });
  //       last_direction = "left";
  //     }
  //   }
});

right_button.addEventListener("click", () => {
  if (scroll_position < trending_list.length - num_desktop_displayed - 1) {
    if (last_direction === "left") {
      scroll_position += 1;
      trending.style.transform = `translateX(calc(-${23.5 * scroll_position}vw))`;
      last_direction = "right";
    } else {
      scroll_position += 1;
      trending.style.transform = `translateX(calc(-${23.5 * scroll_position}vw))`;
      last_direction = "right";
    }
  }
  //   if (scroll_position === 0) {
  //     scroll_position = num_desktop_displayed;
  //     trending_list[scroll_position].scrollIntoView({ behavior: "smooth"});
  //     last_direction = "right";
  //   } else if (scroll_position === trending_list.length - 1) {
  //     return;
  //   } else if (scroll_position < trending_list.length - 1) {
  //     if (last_direction === "left") {
  //       scroll_position += num_desktop_displayed;
  //       trending_list[scroll_position].scrollIntoView({ behavior: "smooth" });
  //       last_direction = "right";
  //     } else {
  //       scroll_position += 1;
  //       trending_list[scroll_position].scrollIntoView({ behavior: "smooth" });
  //       last_direction = "right";
  //     }
  //   }
});
