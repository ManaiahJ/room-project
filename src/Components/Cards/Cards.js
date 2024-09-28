import classes from './Cards.module.css'
export default function Cards() {
    return (
        <>
            <div className={classes.card}>
                <div className='row ms-0 me-0 '>
                    <div class="card w-25 ms-5 mt-3 shadow ">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some example text. Some example text.</p>
                        </div>
                    </div>
                    <div class="card w-25 ms-5 mt-3 shadow">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some example text. Some example text.</p>
                        </div>
                    </div>
                    <div class="card w-25 ms-5 mt-3 shadow">
                        <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">Some example text. Some example text.</p>
                        </div>
                    </div>
                    <div class="card w-25 ms-5 mt-3 shadow">
                        <div class="card-body">
                            <h3 class="card-title">Card title</h3>
                            <p class="card-text">Some example text. Some example text.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}