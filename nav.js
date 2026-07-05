document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("div")

  nav.innerHTML = `
    <div class="tabbar">
      <a href="today.html" id="t1">Today</a>
      <a href="history.html" id="t2">History</a>
      <a href="insight.html" id="t3">Insight</a>
    </div>
  `

  document.body.appendChild(nav)

  const path = location.pathname

  if (path.includes("today") || path.endsWith("/")) {
    document.getElementById("t1")?.classList.add("active")
  }
  if (path.includes("history")) {
    document.getElementById("t2")?.classList.add("active")
  }
  if (path.includes("insight")) {
    document.getElementById("t3")?.classList.add("active")
  }
})
