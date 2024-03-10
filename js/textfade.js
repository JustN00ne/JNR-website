    // List of texts to be displayed
    var textList = ["connections", "metro lines", "stations", "tram lines", "bus lines", "cities"];

    // Function to update text with fade-out and fade-in animation
    function updateText(index) {
        var textSpan = $("#textSpan");

        // Check if the element is visible before fading out
        if (textSpan.is(":visible")) {
            // Fade out the current text
            textSpan.fadeOut(500, function() {
                // Change the text
                textSpan.text(textList[index]);

                // Fade in the new text
                textSpan.fadeIn(500);
            });
        } else {
            // If not visible, simply change the text and fade in
            textSpan.text(textList[index]);
            textSpan.fadeIn(500);
        }
    }

    // Example: Update text every 2 seconds
    var currentIndex = 0;
    setInterval(function() {
        updateText(currentIndex);
        currentIndex = (currentIndex + 1) % textList.length;
    }, 2000);