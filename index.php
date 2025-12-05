<?php

require __DIR__ . '/header.php';
?>

<main>

    <section>
        <h1>Tired of your commander decks? Find your next commander using the Commander Generator!</h1>
        <p>Select your desired color(s) below (or go crazy and switch on any color!) and click generate!</p>
    </section>

    <div class="commander-container">
        <div class="card-container"></div>
        <div class="card-info"></div>
    </div>

    <form class="form-group">
        <label class="form-label">Desired Color(s)</label>
        <div class="btn-group">
            <input class="btn-check" type="checkbox" id="white" value="W" name="checkbox" />
            <label class="btn btn-primary" for="white">White</label>
            <input class="btn-check" type="checkbox" id="blue" value="U" name="checkbox" />
            <label class="btn btn-primary" for="blue">Blue</label>
            <input class="btn-check" type="checkbox" id="black" value="B" name="checkbox" />
            <label class="btn btn-primary" for="black">Black</label>
            <input class="btn-check" type="checkbox" id="red" value="R" name="checkbox" />
            <label class="btn btn-primary" for="red">Red</label>
            <input class="btn-check" type="checkbox" id="green" value="G" name="checkbox" />
            <label class="btn btn-primary" for="green">Green</label>
        </div>
        <!-- <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="formSwitchChecked">
            <label class="form-check-label" for="formSwitchChecked">Any color!</label>
        </div> -->
        <button type="submit" class="btn btn-primary">Generate!</button>
    </form>

    <!-- Generate Card image, Name -->

</main>

<?php

require __DIR__ . '/footer.php';
?>