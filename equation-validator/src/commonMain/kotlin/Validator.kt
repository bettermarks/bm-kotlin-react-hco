import kotlin.js.JsExport
import kotlin.js.JsName
import validateSyntax
import performOperation

@JsExport()
@JsName("validateEquation")
fun validate(equationString: String): String {
    val whiteSpaceRemoved: String = equationString.filter { !it.isWhitespace() }
    if (!validateSyntax(whiteSpaceRemoved)) return "Syntax error"

    val parsedValues: List<String> = whiteSpaceRemoved.split('=')

    val expectedResult = parsedValues[1].toFloat()
    val operation = parsedValues[0]

    return if (performOperation(operation) === expectedResult) "Valid" else "Invalid"
}
