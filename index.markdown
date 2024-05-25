---
title: "Liam Reese's Portfolio"

embed_title: "Liam Reese's Portfolio"
embed_description: "A quick overview of Liam Reese's software dev job experience and various hobby projects"

layout: home
---


<!-- Knowledge and skills -->
<!-------------------------->

{% include gallery_section.html 

    title = "My Knowledge"
    description = "
### Programming Languages
* C, C++, C#, Rust 
* GLSL, HLSL, CG

### Skills
* Unity, Unreal, Godot
* AWS S3, DynamoDB, EC2
* Git, PlasticSCM, SVN

### Libraries
* OpenGL, Vulkan, D3D11 / DX11
* SDL2, GLFW
* AWSSDK (.NET)
"

%}

<!-------------------->
<!-- Job Experience -->
<!-------------------->

{% capture major_projects %}

{% include experience_card.html 

    title="Strayed VR<br/>Crustacean Interactive"
    href="https://strayedvr.com"

    date = "October 2023"
    skills = "C# / HLSL"

    state = "Released (Ongoing)"

    description = "
### Description  

> Released initially on April 19th 2024 

> StrayedVR is a multiplayer VR survial game from [Crustacean Interactive](https://crustaceaninteractive.com).  

### Skills Used  
* C#, HLSL  
* D3D11, Vulkan  
* AWS S3, DynamoDB, EC2  
* Git

### [Gallery](galleries/strayed)
"

%}

{% endcapture %}

{% include experience_block.html 
    
    title="Job Experience"

    content=major_projects 

%}

<!-------------------->
<!-- Hobby Projects -->
<!-------------------->

{% capture major_projects %}

{% include experience_card.html 

    title="LVR<br/>Virtual Afterthoughts"

    date = "September 2020 - September 2022"
    skills = "C# / HLSL"

    state = "Unreleased"

    description = "
### Description  

> LVR was a hobby project started by three of my friends, Lakatrazz, Riggle, and LA1870.
>
> My job on the project was to modify Unity's URP to create a unique graphical style for our game
>
> The game never released, however all of us learned a lot about teamwork and project structuring

### Skills Used  
* C#, HLSL  
* D3D11 
* PlasticSCM

### [Gallery](galleries/lvr)
"

%}

{% include experience_card.html 

    title="Schism"
    href="https://github.com/zCubed3/schism"

    date = "March 2024"
    skills = "C++17"

    state = "WIP"

    description = "A personal research project to create a basic assembler and bytecode interpreter that behaves something like GPU hardware"

%}

{% include experience_card.html 

    title="RT-Everywhere"
    href="https://github.com/zCubed3/RT-Everywhere"

    date = "June 2023"
    skills = "C99"

    state = "Complete"

    description = "
A CPU raytracer written to be portable, has been ported to weird platforms like the Nintendo 3DS (homebrew)  

### Output Example
<img src=\"https://cdn.zcubed.xyz/images/rte_example.png\" width=300 class=\"center_block rounded\"/>
"


%}

{% endcapture %}

{% include experience_block.html 
    
    title="Hobby Projects"

    content=major_projects 

%}