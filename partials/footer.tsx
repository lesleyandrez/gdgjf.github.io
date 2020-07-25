function Footer() {
    return (
        <footer className="mdl-mega-footer">
            <div className="mdl-mega-footer__middle-section">

                <div className="mdl-mega-footer__drop-down-section">
                    <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
                    <h1 className="mdl-mega-footer__heading">Nosso GDG</h1>
                    <ul className="mdl-mega-footer__link-list">
                        <li><a href="https://developers.google.com/groups/chapter/101567513255448590336/">GDG Chapter</a></li>
                        <li><a href="https://groups.google.com/forum/#!forum/gdg-juiz-de-fora">Mailing List</a></li>
                        <li><a href="https://github.com/gdgjf">GitHub</a></li>
                    </ul>
                </div>

                <div className="mdl-mega-footer__drop-down-section">
                    <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
                    <h1 className="mdl-mega-footer__heading">Siga-nos!</h1>
                    <ul className="mdl-mega-footer__link-list">
                        <li><a href="https://plus.google.com//101567513255448590336">Google+</a></li>
                        <li><a href="https://www.facebook.com/GoogleDevelopersGroupJuizDeFora">Facebook</a></li>
                    </ul>
                </div>

                <div className="mdl-mega-footer__drop-down-section">
                    <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
                    <h1 className="mdl-mega-footer__heading">Recursos</h1>
                    <ul className="mdl-mega-footer__link-list">
                        <li><a href="https://developers.google.com/groups/">Google Developers Group</a></li>
                        <li><a href="https://pages.github.com">GitHub Pages</a></li>
                        <li><a href="https://getmdl.io">Material Design Lite</a></li>
                    </ul>
                </div>

                <div className="mdl-mega-footer__drop-down-section">
                    <input className="mdl-mega-footer__heading-checkbox" type="checkbox" defaultChecked />
                    <h1 className="mdl-mega-footer__heading">Comunidades</h1>
                    <ul className="mdl-mega-footer__link-list">
                        <li><a href="./devjf/index.html">DEV JF - Comunidade no Slack</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer
