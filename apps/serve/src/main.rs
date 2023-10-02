#[macro_use]
extern crate rocket;

use std::path::PathBuf;
use std::env;

use rocket::*;
use rocket::form::Form;
use rocket::fs::{NamedFile, relative};

// Defines a basic get -> "serve" function
macro_rules! get_serve {
    ($name:ident, $route:tt, $path:tt) => {
        #[get($route)]
        async fn $name(asset: PathBuf) -> Option<NamedFile> {
            let path = env::current_dir()
                        .unwrap()
                        .join($path)
                        .join(asset);

            NamedFile::open(path).await.ok()
        }
    }
}

#[get("/")]
async fn index() -> Option<NamedFile> {
    let path = env::current_dir().unwrap().join("website/index.html");
    NamedFile::open(path).await.ok()
}

get_serve!(load_file_site, "/<asset..>", "website");
get_serve!(load_file_content, "/website-content/<asset..>", "content");

#[rocket::main]
#[allow(unused_must_use)]
async fn main() {
    let routes = routes![
        index,
        load_file_site,
        load_file_content
    ];

    rocket::build()
        .mount("/", routes)
        .launch()
        .await;
}