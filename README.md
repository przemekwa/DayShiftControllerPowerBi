# DayShiftControllerPowerBi

Jest to kontrolka do PowerBi, która pokazuje raport z obłożenia zmian przez pracowników. Kontrolka powiadamia czy na każdy dzień jest pełna obsługa zmian przez pracowników.Dokładne wytyczne będą jeszcze wypracowywane.

## Szybki start

Wtyczka jest tworzona w TS. Aby ją uruchomić trzeba przejść proces instlacji i konfiguracji swojego konta w PowerBi

Aby uruchomić a właściwie debugować wtyczkę należy:

1. Utworzyć nowey projekt z pbiviz
```
pbiviz new My Visual Name
```
2.	Włączyć serwer do testów elementu
```
pbiviz start
```
3.	Deploy elementu (opcjonalne)
```
pbiviz package
```

4. Następnie przechodzimy na strone https://app.powerbi.com. 
5. Edytujemy dowolny raport
6. Włączamy wtyczkę, która się nazywa ``` Element wizualny dewelopera ```



## Instalacja

Wszystkie potrzebne informację można znaleść na stronie https://github.com/microsoft/powerbi-visuals. 

### Instalacja CLI

1. Instlacja Node.js
2. Instlacja NPM
3. Instlacja Powerbi-Visuals-Tool  
``` 
npm install -g powerbi-visuals-tools 
```
3.1.	Zainstalowanie certyfikatu SSL  
```
pbiviz --install-cert
```


```
Przy instalacji certyfikatu należy zwrócić uwagę, że certyfikat powinien być w odpowiednim magazynie **Trusted Root Certification Authorities***
```

### Konfiguracja

* Włączenie opcji deweloperskich w PowerBI portal
* Koło zębate -> Ustawienia
* Deweloper -> check włącz element wizualny
 



