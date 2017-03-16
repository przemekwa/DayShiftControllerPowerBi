# DayShiftControllerPowerBi


## Spis treści

- [Szybki start](#Szybki-start)
- [Instalacja](#Instalacja)
    - [Instlacja CLI](#Instlacja-CLI)
    - [Konfiguracja](#konfiguracja]
    

   

## Szybki start

Jest to kontrolka do PowerBi, która pokazuje raport z obłożenia zmian przez pracowników. 

  1. Kontrolka powiadamia czy na każdy dzień jest pełna obsługa zmian przez pracowników.
  2. Dokładne wytyczne będą jeszcze wypracowywane.
  
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
3.	Deploy elementu
```
pbiviz package
```


## Instalacja

Wszystkie potrzebne informację można znaleść na stronie https://github.com/microsoft/powerbi-visuals. 



### Instlacja CLI

1. Instlacja Node.js
2. Instlacja NPM
3. Instlacja CLI - 

``` 
npm install -g powerbi-visuals-tools 
```

3.1.	Zainstalowanie certyfikatu SSL  

```
pbiviz --install-cert
```

### Konfiguracja

1. 	Włączenie opcji deweloperskich w PowerBI portal
 1.1.	 Koło zębate -> Ustawienia
 1.2.  Deweloper -> check włącz element wizualny
 
### 


