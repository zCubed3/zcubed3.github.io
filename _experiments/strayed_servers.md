---
title: "Strayed Servers"

embed_title: "Strayed Servers"
embed_description: "A server browser for Strayed VR"

date: 2024-05-24 18:37:00 -0700
categories: experiments
excerpt: "A prototype for Strayed's eventual public server browser!"

layout: base
---

<script src="/js/strayed_server_lister.js"></script>

<template id="server_entry_template">
    <project_card>
        <h2 id="server_name" class="centered">
            SERVER_NAME
        </h2>
        <div style="display: flex; flex-direction: row; justify-content: center; gap: 3em;">
            <span>
                <b>POPULATION</b>
                <br/>
                <span id="server_pop">
                    #POP
                </span>
            </span>
            <span>
                <b>LAST WIPED</b>
                <br/>
                <span id="server_epoch">
                    #WIPE
                </span>
            </span>
        </div>
    </project_card>
</template>


{% capture server_holder %}

<div id="server_holder" class="flex_grid">

</div>

{% endcapture %}

<div id="button_holder" class="flex_row">
    <div>
        <button onclick="refresh_listing()">
        Refresh
        </button>
    </div>
</div>

{% include experience_block.html 

    title = "Servers"
    content = server_holder

%}