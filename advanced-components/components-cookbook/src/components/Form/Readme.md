## Form

    const FormValues = require('./FormValues').default;
    let data = {
      name: ''
    };
    // update is an example function, which is handled
    // in the FormValues component in this example
    const update = function(e) {data = e;}
    <FormValues initialData={data}>
      <Form onSubmit={update}>
        <Form.Input type='string'
                    placeholder='Your name'
                    name='name' />
      </Form>
    </FormValues>
