module Site.Client

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html

[<JavaScript>]
let SampleButtons () =
    let ( @ ) a b =
        Html.Default.NewAttr a b
    let Button (text: string) =
        Button [Attr.Type "button"; Attr.Class "btn btn-primary"] -< [Text text]
    let Group (xs: list<IPagelet>) =
        Div [Attr.Class "btn-group"; "data-toggle" @ "buttons-radio"] -< xs
    let Content = Div []
    Div [
        Group [
            Button "Vikki"
            |>! OnClick (fun _ _ -> Content.Text <- "Test 1")
            Button "Fole"
            |>! OnClick (fun _ _ -> Content.Text <- "Test 2")
            Button "Everyone"
            |>! OnClick (fun _ _ -> Content.Text <- "Test 3")
        ]
        Content
    ]

[<JavaScript>]
let EntryPoint () =
    JavaScript.Log("Loaded OK")
