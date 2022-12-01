import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport()
@JsName("performOperation")
fun performOperation(equationString: String): Float {
    val numbers = equationString.split("+")
    val floats = numbers.map { it.toFloat() }
    return floats.sum()
}
