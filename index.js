function loadButtons() {
    $("#buttons").append(`
        <div content="column">
            <input class="button is-6" id="arch" value="Architecture" onclick="location.href='architecture.html'"/>>
        </div>
        <div content="column">
            <input class="button" id="masc" value="Masculinity" onclick="location.href='masculinity.html'">
        </div>
        <div content="column">
            <input class="button" id="femi" value="Femininity" onclick="location.href='femininity.html'">
        </div>
        <div content="column">
            <input class="button" id="wors" value="Worship" onclick="location.href='worship.html'">
        </div>
        <div content="column">
            <input class="button" id="powe" value="Worldly Power" onclick="location.href='power.html'">
        </div>
        <div content="column">
            <input class="button" id="othe" value="The Other" onclick="location.href='other.html'">
        </div>
        <div content="column">
            <input class="button" id="inti" value="Intimacy" onclick="location.href='intimacy.html'">
        </div>
        <div content="column">
            <input class="button" id="past" value="Past and Future" onclick="location.href='pastfuture.html'">
        </div>`)
}
