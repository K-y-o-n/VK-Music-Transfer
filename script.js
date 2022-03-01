copy((Array.from(document.querySelectorAll(".audio_row")).map((el) => (el.innerText).split("\n", 2).join(" - ")).join("\n")
))