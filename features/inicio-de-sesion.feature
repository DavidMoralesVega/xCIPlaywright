# language: es
Característica: Inicio de sesión
  Como cliente de la tienda
  quiero entrar con mi cuenta
  para comprar con mis datos guardados

  Antecedentes:
    Dado que estoy en la página de inicio de sesión

  Escenario: DWS-LOG-004 · credenciales válidas
    Cuando ingreso con mi usuario
    Entonces veo el enlace "Log out"

  Escenario: DWS-LOG-005 · cerrar sesión
    Cuando ingreso con mi usuario
    Y cierro la sesión
    Entonces veo el enlace "Log in"