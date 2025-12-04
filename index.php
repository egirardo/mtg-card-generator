<?php

require __DIR__ . '/header.php';
?>

<main>

    <section>
        <h1>Tired of your commander decks? Find your next commander using the Commander Generator!</h1>
        <p>Select your desired color(s) below (or go crazy and switch on any color!) and click generate!</p>
    </section>

    <div class="card-container"></div>

    <!-- Create user input form to search API based on search criteria from user: Color, Set, Name, format legality, (maybe text content, depending on how complicated) -->

    <form class="form-group" action="" method="post">
        <label class="form-label">Color(s)</label>
        <div class="btn-group">
            <input class="btn-check" type="radio" id="white" value="White" />
            <label class="btn btn-outline-primary" for="white">White</label>
            <input class="btn-check" type="radio" id="blue" value="Blue" />
            <label class="btn btn-outline-primary" for="blue">Blue</label>
            <input class="btn-check" type="radio" id="black" value="White" />
            <label class="btn btn-outline-primary" for="black">Black</label>
            <input class="btn-check" type="radio" id="red" value="White" />
            <label class="btn btn-outline-primary" for="red">Red</label>
            <input class="btn-check" type="radio" id="green" value="White" />
            <label class="btn btn-outline-primary" for="green">Green</label>
        </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="formSwitchChecked" checked>
            <label class="form-check-label" for="formSwitchChecked">Any color!</label>
        </div>
        <button type="submit" class="btn btn-primary">Generate!</button>
    </form>

    <!-- Generate Card image, Name -->

</main>

<?php

require __DIR__ . '/footer.php';
?>