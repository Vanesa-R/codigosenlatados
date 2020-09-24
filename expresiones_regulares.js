/* Banderas:
g (global) - no se detiene tras la primera coincidencia, sino que las busca todas.
m (multi linea)
i (insensitive) - ignora mayúsculas y minúsculas
y (sticky)
u (unicode)


Comodines:

. (punto) Comodín de sustitución.
    Con este comodín podemos sustituir cualquier carácter en el patrón.
    Ejemplo: «/l.rem/» nos validará tanto «lorem» como «llorem», «l-rem», étc.

[] (corchetes) listado de caracteres válidos
    Ejemplo: «/[aei]/» dará como resultado que los caracteres válidos sean «a», «e», «i».

[-] (rangos)
    Ejemplo: «/[a-z]/» validará los caracteres desde la «a» a la «z».

() (paréntesis) Cadenas completas
    Ejemplo: «/(20)/» valida «20» (¡Importante! si lo ponemos en corchetes [20] validará el 2 y el 0).
    «/(lorem|dolor)/» valida las dos palabras de manera independiente (Es necesario incluir la pleca).


Limitadores:
^ Con este símbolo indicamos que antes de él no puede haber nada.
$ Con este símbolo indicamos que después de él no puede haber nada.


Operadores:
{n} Tiene que aparecer n cantidad de veces
{n, m} Se tiene que repetir entre n y m cantidad de veces
{n, } Se tiene que repetir entre n e infinitas veces
    Ejemplo: «/{1, 3}/» Tiene que aparecer mínimo una vez y repetirse hasta tres veces


* (asterísco) 
    Lo que está antes del asterisco puede estar, puede no estar, y si está se puede repetir.
    Ejemplo: /Lorem (20)* / Si ponemos únicamente Lorem coincidirá porque el número 20 puede estar o puede no estar al indicar el asterisco

? (interrogación)
    Lo que está antes de la interrogación estar, puede no estar, y si está no se pude repetir.
    Ejemplo /Lorem (20)? / Mientras que en el caso anterior validaría si poníamos «Lorem 20 20 20», ahora eso no sería validado. Sí lo sería «Lorem 20», o solo Lorem


+ (más)
    Lo que está antes del más tiene que aparecer una vez como mínimo (se puede repetir).
    Ejemplo: /Lorem (20)+ / Para que sea válido, al menos una vez tiene que aparecer «Lorem 20», si solo está «Lorem» la expresión regular no será válida


Escape:
\s 
    Indicamos un espacio en blanco, salto de línea...
    Ejemplo: /Lorem\s(20)/ valida «Lorem 20», no valida «Lorem20» (Observa que en el ejemplo anterior necesitaba poner un espacio entre la palabra y el paréntesis)

\S
    Funciona al contrario.  Lorem\S(20) no será valido si entre lorem y 20 hay un espacio.

\d 
    Para validar dígitos.
    Ejemplo: /^\d{9}$/ valida que haya nueve dígitos (sin espacios entre ellos, y nada antes y después de los dígitos)

\D 
    Ningún carácter puede ser un número.
    Ejemplo: /^\D{9}$/ valida que haya nueve letras (sin espacios entre ellas, y nada antes y después de las letras. No puede haber números)
    
\w
    Puede validar dígitos, letras y el signo _

\W
    Puede validar signos como el punto, guión, interrogación...
    */





