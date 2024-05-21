import React, { useState } from "react";
import { Link } from "react-router-dom";
import './menu.css';
export function Menuwork() {


    return (
        <>
    <nav class="navbar navbar-expand-lg bg-light ">
        <div class="container-fluid bg-color">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <Link to = '/admin' class="navbar-brand text text-white" href="#">Yellow Owl <br/>ADMIN</Link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
        </>
    );
}