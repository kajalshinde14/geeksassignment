let homePage = document.getElementById("home");
let search_bar = document.getElementById("search_bar");
let reels = document.getElementById("reels");
let Notifications = document.getElementById("notifications");
let profile = document.getElementById("profile");

function switchingPages(id) {
  if (id == "home") {
    homePage.classList.remove("hide_home");
    reels.classList.add("reels_hide");
    search_bar.classList.add("searching_bar");
    Notifications.classList.add("notifications_style_hide");
    profile.classList.add("profile_hide");
  } else if (id == "search") {
    homePage.classList.add("hide_home");
    reels.classList.add("reels_hide");
    search_bar.classList.remove("searching_bar");
    profile.classList.add("profile_hide");
    Notifications.classList.add("notifications_style_hide");
    profile.classList.add("profile_hide");
  } else if (id == "notifications") {
    Notifications.classList.remove("notifications_style_hide");
    reels.classList.add("reels_hide");
    homePage.classList.add("hide_home");
    search_bar.classList.add("searching_bar");
    profile.classList.add("profile_hide");
  } else if (id == "reels") {
    search_bar.classList.add("searching_bar");
    reels.classList.remove("reels_hide");
    Notifications.classList.add("notifications_style_hide");
    homePage.classList.add("hide_home");
    profile.classList.add("profile_hide");
  } else {
    profile.classList.remove("profile_hide");
    search_bar.classList.add("searching_bar");
    reels.classList.add("reels_hide");
    Notifications.classList.add("notifications_style_hide");
    homePage.classList.add("hide_home");
  }
}