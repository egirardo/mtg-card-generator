<?php

require __DIR__ . '/header.php';
?>

<main>

    <section>
        <h1>Find your next commander using the Commander Generator!</h1>
    </section>

    <div class="commander-container">
        <div class="card-container">
            <p id="instructions">Select your desired color(s) below and click generate!</p>
            <div class="status-message"></div>
        </div>
        <div class="card-info"></div>
    </div>

    <form class="form-group">
        <label class="form-label">Desired Color(s):</label>
        <div class="btn-group">
            <input class="btn-check" type="checkbox" id="white" value="W" name="checkbox" />
            <label class="btn btn-primary white" for="white">White</label>
            <input class="btn-check" type="checkbox" id="blue" value="U" name="checkbox" />
            <label class="btn btn-primary blue" for="blue">Blue</label>
            <input class="btn-check" type="checkbox" id="black" value="B" name="checkbox" />
            <label class="btn btn-primary black" for="black">Black</label>
            <input class="btn-check" type="checkbox" id="red" value="R" name="checkbox" />
            <label class="btn btn-primary red" for="red">Red</label>
            <input class="btn-check" type="checkbox" id="green" value="G" name="checkbox" />
            <label class="btn btn-primary green" for="green">Green</label>
        </div>
        <button type="submit" class="btn btn-primary">Generate!</button>
    </form>

</main>

<?php

require __DIR__ . '/footer.php';
?>