# DASHBOARD

- '/'
 - statystyki dzisiejszych zamówień (zdalne i lokalne)
 - listę rezerwacj i eventów zaplanowanych na dzisiaj


# Logowanie 

- '/login'
 - pola na login i hasło
 - guzik do zalogowania (link do dashboardu)


# Widok dostępności stolików

- '/tables'
 - wybór daty i godziny
 - tabela z listą rezerwacji oraz wydarzeń
  - każda kolumna = 1 stolik
  - każdy wiersz = blok 30min
  - ma przpominać widok tygodnia z kalendarza google, gdzie w kolemnach zamiast dni są różne stoliki
  - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów
- '/tables/booking/new'
 - zawiera wszystkie informacje i daty dotyczące rezerwacji
 - umożliwia edycję i zapisanie zmian
- '/tables/booking/:id'
 - analogicznie do powyższej, bez początkowych informacji
- '/tables/events/new'
 - analogicznie do powyższej, bez początkowych informacji
- '/tables/events/:id'
 - analogicznie do powyższej, bez początkowych informacji

# Widok kelnera

- '/waiter'
 - tabela
  - w wierszach stoliki
  - w kolumnach różne informacje (status, czas od ostatniej aktywności)
  - w ostatniej kolumnie będziemy mieli dostępne akcje dla danego stolika
- '/waiter/order/new'
 - numer stolika (edytowalny)
 - menu produktów
 - opcje wybranegi produktu
 - zamówione produkty z opcjami i ceną
 - kwotę zamówienia
- '/waiter/order/:id'
 - jak powyższa

# Widok kuchni

- '/kitchen'
 - wyświetlać listę zamówień w kolejności ich złożenia
 - lista musi zawierać:
  - numer stolika (lub zamówienia zdalnego)
  - pełne informacje dotyczące zamówionych dań
 - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane 