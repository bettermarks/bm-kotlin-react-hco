import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport()
@JsName("validateSyntax")
fun validateSyntax(equationString: String): Boolean {
    // Regex to match a + b = c accepting ints and floats in 1, 1.5, .5 formats.
    val regex: Regex = Regex("^([+-]?([0-9]*[.])?[0-9]+)[+]([+-]?([0-9]*[.])?[0-9]+)=([+-]?([0-9]*[.])?[0-9]+)")
    return if (regex.matches(equationString)) true else false
}