import { React, useState } from "react";
import { MobileDesign } from "./MobileDesign";
import devLensIcon from "./assets/images/logo-devlens.svg"
import styleSpyIcon from "./assets/images/logo-style-spy.svg"
import speedBoostIcon from "./assets/images/logo-speed-boost.svg"
import jsonWizardIcon from "./assets/images/logo-json-wizard.svg"
import tabMasterProIcon from "./assets/images/logo-tab-master-pro.svg"
import viewportBuddyIcon from "./assets/images/logo-viewport-buddy.svg"
import markupNotesIcon from "./assets/images/logo-markup-notes.svg"
import gridGuidesIcon from "./assets/images/logo-grid-guides.svg"
import palettePickerIcon from "./assets/images/logo-palette-picker.svg"
import linkCheckerIcon from "./assets/images/logo-link-checker.svg"
import domSnapshotIcon from "./assets/images/logo-dom-snapshot.svg"
import consolePlusIcon from "./assets/images/logo-console-plus.svg"

export function ParentWrapper() {
    const [extensions, setExtensions] = useState([
        {
            id: 1,
            icon: devLensIcon,
            title: "DevLens",
            description: "Quickly instpect page layouts and visualize element boundaries.",
            active: false
        },
        {
            id: 2,
            icon: styleSpyIcon,
            title: "StyleSpy",
            description: "Instantly analyze and copy CSS from any webpage element.", 
            active: false
        },
        {
            id: 3,
            icon: speedBoostIcon,
            title: "SpeedBoost",
            description: "Organize and accelerate resource usage to maximize page loading.",
            active: false 
        },
        {
            id: 4, 
            icon: jsonWizardIcon,
            title: "JSONWizard",
            description: "Visualize, validate, and format JSON responses from APIs.",
            active: false
        },
        {
            id: 5,
            icon: tabMasterProIcon,
            title: "TabMaster Pro",
            description: "Organize browser tabs into groups and sessions.",
            active: false
        },
        {
            id: 6,
            icon: viewportBuddyIcon,
            title: "ViewportBuddy",
            description: "Simulate various screen sizes to test responsiveness.",
            active: false
        },
        {
            id: 7,
            icon: markupNotesIcon,
            title: "Markup Notes",
            description: "Create annotations and notes directly inside web pages for collaboration or design.",
            active: false
        },
        {
            id: 8,
            icon: gridGuidesIcon,
            title: "GridGuides",
            description: "Overlay customizable grid and alignment guides on any webpage.",
            active: false
        },
        {
            id: 9,
            icon: palettePickerIcon,
            title: "Pallete Picker",
            description: "Instantly analyze color palettes from any website.",
            active: false
        },
        {
            id: 10,
            icon: linkCheckerIcon,
            title: "LinkChecker",
            description: "Scan all page links to highlight broken or missing URLs.",
            active: false
        },
        {
            id: 11,
            icon: domSnapshotIcon,
            title: "DOM Snapshot",
            description: "Capture an exportable DOM snapshot with full structure.",
            active: false
        },
        {
            id: 12,
            icon: consolePlusIcon,
            title: "ConsolePlus",
            description: "Enhance developer console with filtered logs and shortcuts.",
            active: false
        }
    ]);
    
    function onToggle(id) {
        setExtensions(prev => 
            prev.map(ext =>
                ext.id === id ? { ...ext, active: !ext.active } : ext
            )
        );
    }

    return (
        <MobileDesign
        extensions={extensions}
        onToggle={onToggle} />
    )
}