import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport()
@JsName("removeWhiteSpace")
fun removeWhiteSpace(equationString: String): String {
    return equationString.filter { !it.isWhitespace() }
}
