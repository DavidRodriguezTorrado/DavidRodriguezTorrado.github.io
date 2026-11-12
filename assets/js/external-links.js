/* Keep external websites in a separate tab throughout the site. */
(function () {
  "use strict";
  var localHost = window.location.hostname.replace(/^www\./, "");
  document.querySelectorAll("a[href]").forEach(function (link) {
    var url;
    try {
      url = new URL(link.getAttribute("href"), document.baseURI);
    } catch (error) {
      return;
    }
    if (url.protocol !== "http:" && url.protocol !== "https:") return;
    var host = url.hostname.replace(/^www\./, "");
    if (host === localHost || host === "davidrtorrado.com" || host.endsWith(".davidrtorrado.com")) return;
    link.target = "_blank";
    link.relList.add("noopener", "noreferrer");
  });
}());
